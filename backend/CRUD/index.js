import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from './router/user.js';
import bookingRoutes from './router/booking.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// User routes (signup, login)

// http://localhost:3000/api/user/signup   ✅
// http://localhost:3000/api/user/login

app.use('/api/user', userRoutes);

// Booking routes

// http://localhost:3000/api/user/signup
// http://localhost:3000/api/user/login

app.use('/', bookingRoutes);  // Booking route is /api/bookings as defined in router

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('MongoDB connection error:', err));
