const express = require('express');
const router = express.Router();
const Answer = require('../models/Answer');

router.post('/submit', async (req, res) => {
    console.log('Received request to submit answers:', req.body);
    try {
        const newAnswer = new Answer(req.body);
        await newAnswer.save();
        res.status(201).json({ message: 'Answer saved successfully' });
    } catch (error) {
        console.error('Error saving answer:', error);
        res.status(400).json({ error: 'Error saving answer' });
    }
});

module.exports = router;
