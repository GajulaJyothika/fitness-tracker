const express = require('express');
const router = express.Router();
const Workout = require('../models/Workout'); // Make sure this file exists

// POST: Add a new workout
router.post('/', async (req, res) => {
  console.log("Received POST:", req.body); // ✅ Add this

  try {
    const workout = new Workout(req.body);
    await workout.save();
    res.status(201).json(workout);
  } catch (err) {
    console.error('Error saving:', err);
    res.status(400).json({ message: err.message });
  }
});


// GET: Get all workouts by userId
router.get('/:userId', async (req, res) => {
  try {
    const workouts = await Workout.find({ userId: req.params.userId });
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
