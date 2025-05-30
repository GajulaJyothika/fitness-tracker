const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  date: { type: String, required: true },
  type: { type: String, required: true },
  duration: { type: Number, required: true },
  calories: { type: Number, required: true }
});

module.exports = mongoose.model('Workout', workoutSchema);
