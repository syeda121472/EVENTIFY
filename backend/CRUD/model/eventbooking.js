import mongoose from 'mongoose';

const eventBookingSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  eventCategory: { type: String, required: true },
  additionalNotes: { type: String },
}, { timestamps: true });

const eventbooking = mongoose.model('eventbooking', eventBookingSchema);

export default eventbooking;
