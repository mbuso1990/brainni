const express = require('express');
const router = express.Router();
const Topic = require('../models/Topic');
const mongoose = require('mongoose');

// Middleware to fetch topic by ID
async function getTopic(req, res, next) {
  let topic;
  try {
    topic = await Topic.findById(req.params.id);
    if (!topic) {
      return res.status(404).json({ message: 'Cannot find topic' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  req.topic = topic;
  next();
}

// Get all topics
router.get('/', async (req, res) => {
  try {
    const topics = await Topic.find();
    res.json(topics);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single topic by ID
router.get('/:id', getTopic, (req, res) => {
  res.json(req.topic);
});

// Create a new topic
router.post('/', async (req, res) => {
  const topic = new Topic({
    name: req.body.name,
    description: req.body.description,
    levels: req.body.levels
  });

  try {
    const newTopic = await topic.save();
    res.status(201).json(newTopic);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Add a new level to a topic
router.post('/:id/levels', getTopic, async (req, res) => {
  try {
    req.topic.levels.push(req.body);
    await req.topic.save();
    res.status(201).json(req.topic);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a level in a topic
router.patch('/:id/levels/:levelId', getTopic, async (req, res) => {
  const level = req.topic.levels.id(req.params.levelId);
  if (!level) {
    return res.status(404).json({ message: 'Cannot find level' });
  }

  if (req.body.level != null) {
    level.level = req.body.level;
  }
  if (req.body.completed != null) {
    level.completed = req.body.completed;
  }
  if (req.body.slides != null) {
    level.slides = req.body.slides;
  }

  try {
    await req.topic.save();
    res.json(req.topic);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a level from a topic
router.delete('/:id/levels/:levelId', getTopic, async (req, res) => {
  const level = req.topic.levels.id(req.params.levelId);
  if (!level) {
    return res.status(404).json({ message: 'Cannot find level' });
  }

  try {
    level.remove();
    await req.topic.save();
    res.json({ message: 'Deleted Level' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
