const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ListingsSchema = new mongoose.Schema({
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
  features: {
    type: Array,
  },
  rating: {
    type: Number,
  },
  images: [],
  owner: {
    type: String
    // type: Schema.Types.ObjectId,
    // ref: 'User',
    // required: true
  }
});

module.exports = mongoose.model('Listing', ListingsSchema)

