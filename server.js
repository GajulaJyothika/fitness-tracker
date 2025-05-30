const express = require('express');
const cors = require('cors');             // <-- Import cors middleware
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

const app = express();
const PORT = 5000;

// 1. Enable CORS to allow frontend requests from different origins (e.g., localhost:5500)
app.use(cors());

// 2. Enable JSON body parsing so req.body works for POST requests
app.use(express.json());

// 3. Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/fitness-tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// 4. Setup workout routes
app.use('/api/workouts', workoutRoutes);

// 5. Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
