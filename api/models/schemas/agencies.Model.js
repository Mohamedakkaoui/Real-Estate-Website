const mongoose = require('mongoose');

const AgencySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  socialMedia: {
    facebook: {
      type: String
    },
    twitter: {
      type: String
    },
    instagram: {
      type: String
    },
    linkedin: {
      type: String
    }, 
},
  website: {
    type: String
  },
 
  listings: [String],
  Bookings : [String],
  images: [],
  ownerId: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Agency', AgencySchema);
