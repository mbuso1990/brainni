const express = require('express');
const router = express.Router();
const Onboarding = require('../models/Onboarding');
const User = require('../models/User');

router.post('/create', async (req, res) => {
  try {
    const { name, source, parentPhone, userId } = req.body;

    // Validate required fields
    if (!name || !parentPhone || source === undefined) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    let user = null;
    if (userId) {
      const existingUser = await User.findById(userId);
      if (existingUser) {
        user = existingUser._id; // Ensure we are saving the correct user ID
      } else {
        return res.status(400).json({ message: 'Invalid user ID' });
      }
    }

    // Create new onboarding document
    const newOnboarding = new Onboarding({
      name,
      source,
      parentPhone,
      createdAt: Date.now(),
      user: user
    });

    // Save the onboarding document
    const savedOnboarding = await newOnboarding.save();

    // Respond with the saved document, including the user ID
    res.status(201).json({ message: 'Onboarding data created successfully', onboarding: savedOnboarding });
  } catch (error) {
    console.error('Creation error:', error);
    res.status(500).json({ message: 'Failed to create onboarding data', error: error.message });
  }
});

module.exports = router;
