// models/Answer.js
const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
  userId: String,
  level: Number,
  slide: Number,
  answers: [String],
}, { timestamps: true });

module.exports = mongoose.model('Answer', AnswerSchema);
