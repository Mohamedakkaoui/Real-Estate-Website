//import schema & mongoose
const mongoose = require('mongoose')
const ListingsSchema = require('../schemas/listing.Model')



//method to delete property
exports.deleteListingFromDB = async (id) => {
  try {
    await ListingsSchema.findByIdAndDelete(id);
    res.status(200).json('Listing has been deleted!');
  } catch (error) {
    throw new Error('Failed to delete user : ' + error)
  }
}
