const mongoose = require('mongoose');
const Schema = mongoose.Schema

const BookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
  listing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Listing',
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);