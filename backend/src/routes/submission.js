const express = require('express');
const multer = require('multer');
const Submission = require('../models/Submission');
const router = express.Router();

// Multer setup for file uploads (max 5MB)
const upload = multer({
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

// POST /api/submit
// Accepts: multipart/form-data (file upload) or JSON (code string)
router.post('/', upload.single('file'), async (req, res) => {
  try {
    let code = req.body.code;
    let filename = req.body.filename;
    const language = req.body.language;

    // If file is uploaded, read its contents
    if (req.file) {
      code = req.file.buffer.toString('utf-8');
      filename = req.file.originalname;
    }

    if (!code || !language) {
      return res.status(400).json({ error: 'Code and language are required.' });
    }

    const submission = new Submission({ code, language, filename });
    await submission.save();
    res.status(201).json(submission);
  } catch (err) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File size exceeds 5MB limit.' });
    }
    res.status(500).json({ error: 'Failed to save submission' });
  }
});

module.exports = router; 