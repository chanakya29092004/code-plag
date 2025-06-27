const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
  userId: { type: String }, // Placeholder for future auth
  code: { type: String, required: true },
  language: { type: String, required: true },
  filename: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Submission', SubmissionSchema); 