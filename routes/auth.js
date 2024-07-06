require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const passport = require('passport');
const User = require('../models/User');
const PasswordResetToken = require('../models/PasswordResetToken');
const path = require('path');

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
  logger: true,
  debug: true,
});

// Register route
router.post('/register', async (req, res) => {
  const { username, password, email, isAdmin, adminCode } = req.body;
  const SECRET_ADMIN_CODE = process.env.SECRET_ADMIN_CODE;

  try {
    if (isAdmin && adminCode !== SECRET_ADMIN_CODE) {
      return res.status(403).json({ message: 'Invalid admin code.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      password: hashedPassword,
      email,
      isAdmin: isAdmin || false,
    });
    await newUser.save();

    req.login(newUser, async (err) => {
      if (err) return res.status(500).json({ error: err.message });
      const userData = {
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
      };

      // Return the user data right after registration
      return res.json({ message: 'User registered successfully', user: userData });
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login route
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(400).json({ message: info.message });

    req.login(user, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      const userData = {
        _id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
      };
      console.log('User logged in successfully:', userData);
      return res.json({ message: 'Login successful', user: userData });
    });
  })(req, res, next);
});

// Route to get the user ID by username
router.get('/user-id/:username', async (req, res) => {
  console.log(`Fetching user with username: ${req.params.username}`);
  const { username } = req.params;

  try {
    const user = await User.findOne({ username }).select('_id username email isAdmin');
    if (!user) {
      console.log('User not found');
      return res.status(404).json({ message: 'User not found' });
    }

    const userData = {
      _id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
    };

    console.log('User data fetched successfully:', userData);
    res.json({ user: userData });
  } catch (err) {
    console.error('Error fetching user data:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Forgot password route
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found');
      return res.status(404).json({ message: 'User not found' });
    }

    const token = crypto.randomBytes(20).toString('hex');
    const resetToken = new PasswordResetToken({
      userId: user._id,
      token,
    });

    await resetToken.save();
    console.log('Reset token saved:', resetToken);

    const mailOptions = {
      to: user.email,
      from: process.env.EMAIL,
      subject: 'Password Reset',
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
             Please click on the following link, or paste this into your browser to complete the process:\n\n
             http://${req.headers.host}/reset-password/${token}\n\n
             If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    };
    

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent:', result);
    res.json({ message: 'Password reset link sent to your email' });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Reset password route
router.get('/reset-password/:token', async (req, res) => {
  const { token } = req.params;

  try {
      const resetToken = await PasswordResetToken.findOne({ token });
      if (!resetToken || resetToken.createdAt < new Date(new Date() - 3600 * 1000)) {
          return res.status(400).json({ message: 'Invalid or expired token' });
      }

      const user = await User.findById(resetToken.userId);
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      res.sendFile(path.join(__dirname, '../public/reset-password-form.html'));
  } catch (err) {
      console.error('Error resetting password:', err);
      res.status(500).json({ message: 'Internal server error' });
  }
});

// Handle the reset password form submission
router.post('/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
      const resetToken = await PasswordResetToken.findOne({ token });
      if (!resetToken || resetToken.createdAt < new Date(new Date() - 3600 * 1000)) {
          return res.status(400).json({ message: 'Invalid or expired token' });
      }

      const user = await User.findById(resetToken.userId);
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      user.password = await bcrypt.hash(password, 10);
      await user.save();

      await PasswordResetToken.deleteOne({ token });

      res.json({ message: 'Password has been reset successfully' });
  } catch (err) {
      console.error('Error resetting password:', err);
      res.status(500).json({ message: 'Internal server error' });
  }
});
router.post('/logout', (req, res) => {
  req.logout(err => {
    if (err) {
      return res.status(500).json({ message: 'Logout failed', error: err.message });
    }
    req.session.destroy(() => {
      res.clearCookie('connect.sid'); // Clear the session cookie
      return res.json({ message: 'Logout successful' });
    });
  });
});

module.exports = router;
