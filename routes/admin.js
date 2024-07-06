const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { ensureAdmin } = require('../middleware/auth');

// Admin Dashboard (protected route)
router.get('/dashboard', ensureAdmin, async (req, res) => {
  try {
    const users = await User.find().select('username email createdAt'); // Fetch username, email, and createdAt only
    res.render('dashboard', { users });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete User Route
router.delete('/delete/:id', ensureAdmin, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
