const mongoose = require('mongoose');

const OnboardingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  source: { type: String, required: true },
  parentPhone: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Reference to User model
});

module.exports = mongoose.model('Onboarding', OnboardingSchema);
