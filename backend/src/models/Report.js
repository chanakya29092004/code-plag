const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  submissionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Submission' },
  plagiarism: {
    similarity: Number,
    matches: [{ line: Number, text: String }]
  },
  quality: {
    loc: Number,
    cyclomaticComplexity: Number,
    duplication: Number,
    functions: Number,
    classes: Number,
    lintErrors: [String],
    recommendations: [String]
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Report', ReportSchema); 