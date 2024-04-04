const mongoose = require('mongoose');

const AgencySchema = new mongoose.Schema({
  Object_id : {
    type : String,
  },
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
    X: {
      type: String
    },
    instagram: {
      type: String
    },
    
},
  website: {
    type: String
  },
 
  listings: [String],
  Bookings : [String],
  images: [],
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Agency', AgencySchema);
