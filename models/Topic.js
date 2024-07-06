const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SlideSchema = new Schema({
  slideNo: { type: Number, required: true },
  text: { type: String, required: true },
  image: { type: String },
  dragItems: [String],
  correctAnswer: String
});

const LevelSchema = new Schema({
  level: { type: Number, required: true },
  completed: { type: Boolean, default: false },
  slides: [SlideSchema]
});

const TopicSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  levels: [LevelSchema]
});

module.exports = mongoose.model('Topic', TopicSchema);
