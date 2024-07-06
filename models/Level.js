const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SlideSchema = new Schema({
  slideNo: Number,
  text: String,
  image: String,
  dragItems: [String],
  correctAnswer: String
});

const LevelSchema = new Schema({
  level: Number,
  completed: Boolean,
  slides: [SlideSchema]
});

module.exports = mongoose.model('Level', LevelSchema);
