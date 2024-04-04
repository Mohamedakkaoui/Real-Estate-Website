const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  Object_id : {
    type : String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  listings: [String],

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
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Booking', BookingSchema);
