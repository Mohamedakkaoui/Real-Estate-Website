//import schema & mongoose
const mongoose = require('mongoose')
const ListingsSchema = require('../schemas/listing.Model')


//get property by Id 
exports.getListingByIdDB = async (id) => {
  try {
    if (mongoose.Types.ObjectId.isValid(id)) {
      const Listing = await ListingsSchema.findOne({ _id: id })
      return Listing
    }
  } catch (error) {
    throw new Error('Failed to get property by ID: ' + error)
  }
};


//method to delete property
exports.deleteListingDB = async (id) => {
  try {
    const ListingtoDelete = await ListingsSchema.findByIdAndDelete(id);
    return ListingtoDelete
  } catch (error) {
    throw new Error('Failed to delete user : ' + error)
  }
}


//get all listed properties
exports.getAllListingDB = async () => {
  try {
    const listings = await ListingsSchema.find()
    return listings
  } catch (error) {
    throw new Error('Failed to fetch listing from the database : ' + error)
  }
}


//Add new listed properties
exports.AddnewListingDB = async (data) => {
  try {
    const Listing = new ListingsSchema(data)
    return await Listing.save()
  } catch (error) {
    throw new error(error)
  }
}

//update Listing from DB
exports.UpdateListingDB = async (id, data) => {
  try {
    return await ListingsSchema.findByIdAndUpdate(id, data, { new: true })
  }
  catch (error) {
    return error
  }
}


