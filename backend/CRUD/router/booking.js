import express from 'express';
import EventBooking from '../model/eventbooking.js';

const router = express.Router();

// POST /api/bookings
router.post('/api/bookings', async (req, res) => {
  try {
    const { fullName, email, phoneNumber, eventCategory, additionalNotes } = req.body;

    if (!fullName || !email || !phoneNumber || !eventCategory) {
      return res.status(400).json({ message: 'Please fill all required fields.' });
    }

    const newBooking = new EventBooking({
      fullName,
      email,
      phoneNumber,
      eventCategory,
      additionalNotes,
    });

    const savedBooking = await newBooking.save();
    res.status(201).json({ message: 'Booking successful', booking: savedBooking });
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
