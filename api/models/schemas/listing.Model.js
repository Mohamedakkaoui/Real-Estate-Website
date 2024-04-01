const mongoose = require ('mongoose')
const Schema = mongoose.Schema


const ListingsSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    listingType: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    size: {
      type: Number
    },
    reviews: [String],
    images: [String],
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  });
  
  module.exports = mongoose.model('Listings', ListingsSchema)