//import schema & mongoose
const mongoose = require('mongoose')
const ListingsSchema = require('../schemas/listing.Model')



//get property by Id 
exports.getListingByIdDB = async (id) => {
  try {
    if (mongoose.Types.ObjectId.isValid(id)) 
    {
      const property = await ListingsSchema.findById(id);
      return property;
    }
  } catch (error) {
    throw new Error('Failed to get property by ID: ' + error);
  }
};


//method to delete property
exports.deleteListingFromDB = async (id) => {
  try {
    await ListingsSchema.findByIdAndDelete(id);
    res.status(200).json('Listing has been deleted!');
  } catch (error) {
    throw new Error('Failed to delete user : ' + error)
  }
}


//get all listed properties
exports.getAllListing = async () => {
    try {
      const listing = await ListingsSchema.find();
      return listing ;
    } catch (error) {
      throw new Error('Failed to fetch listing from the database : ' + error)
    }
}
