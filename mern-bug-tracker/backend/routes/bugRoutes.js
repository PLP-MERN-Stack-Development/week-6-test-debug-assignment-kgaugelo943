const express = require('express');
const router = express.Router();
const Bug = require('../models/Bug');

// Create a bug
router.post('/', async (req, res) => {

  console.log('Incoming bug data:', req.body);

  try {
    const bug = new Bug(req.body);
    const savedBug = await bug.save();
    res.status(201).json(savedBug); 
  } catch (err) {
    console.error(err); 
    res.status(500).json({ error: err.message });
  }
});


// Get all bugs
router.get('/', async (req, res) => {
  const bugs = await Bug.find().sort({ createdAt: -1 });
  res.json(bugs);
});

// Update a bug
router.put('/:id', async (req, res) => {
  try {
    const updatedBug = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBug);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a bug
router.delete('/:id', async (req, res) => {
  try {
    await Bug.findByIdAndDelete(req.params.id);
    res.json({ message: 'Bug deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
