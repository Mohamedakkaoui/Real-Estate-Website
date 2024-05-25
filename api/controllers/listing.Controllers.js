const { getAllListingDB, getListingByIdDB, deleteListingDB, AddnewListingDB, UpdateListingDB, getMyListingsDB } = require('../models/methods/listing.Methods')
const { bufferAndUploadMultiple } = require("../helpers/datauri")
const generateCustomUUID = require('../Utils/customUuidGenerator.js')
const { saveListingForUser } = require('../models/methods/user.Methods.js')

//save listing for user
exports.saveListingUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const listingId = req.params.listingId

    const user = await saveListingForUser(userId, listingId);
    return res.status(201).send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};


//All listing
exports.getListings = async (req, res) => {
  try {
    const listings = await getAllListingDB()
    if (listings.length === 0) {
      return res.status(404).json({ Message: 'Listings not found' })
    }
    return res.status(200).json(listings)
  } catch (error) {
    return res.status(500).json({ Message: 'Failed to get Listings', Error: error.message })
  }
}

// add a new listing
exports.addNewListing = async (req, res) => {
  try {
    const { title, description, category, listingType, price, size, options, location } = req.body
    const owner = req.user.id
    const images = await bufferAndUploadMultiple(req)
    const Object_id = generateCustomUUID()
    const newProperty = await AddnewListingDB({ title, description, category, listingType, price, size, options, images, location, owner, Object_id })
    return res.status(201).json({ message: 'New property added!', result: newProperty })
  } catch (err) {
    return res.status(404).json({ Message: 'Unable to add new property', Error: err.message })
  }
}

//Delete listing
exports.deleteListing = async (req, res) => {
  try {
    const { id } = req.params
    const ListingtoDelete = await deleteListingDB(id)
    if (!ListingtoDelete) {
      return res.status(400).json({ message: 'Error while deleting Listing' })
    }
    return res.status(200).json('Listing has been deleted!')
  } catch (err) {
    return res.status(404).json({ message: 'Unable to Delete property', Error: err.message })
  }
}



// get property by Id 
exports.getListingById = async (req, res) => {
  try {
    const { id } = req.params
    if (!id) {
      return res.status(404).json({ message: 'No property ID was provided.' })
    }
    const property = await getListingByIdDB(id)
    if (!property) {
      return res.status(404).json({ message: 'No property was found for the provided ID' })
    }
    return res.status(200).json({ message: 'Property retrieved successfully', property: property })
  } catch (err) {
    return res.status(500).json({ message: 'Unable to retrieve property. Please try again later.', Error: err.message })
  }
}



//Updaate property

exports.updateListing = async (req, res) => {
  try {
    const { id } = req.params
    if (!id) {
      return res.status(400).json({ message: 'No property ID was provided.' })
    }
    const images = await bufferAndUploadMultiple(req)
    const { title, description, category, listingType, price, size, options, location } = req.body
    const data = { title, description, category, listingType, price, size, images, options, location }
    if (!data) {
      return res.status(400).json({ message: 'No Data was provided' })
    }
    const updatedListing = await UpdateListingDB(id, data)
    if (!updatedListing) {
      return res.status(500).json({ message: 'Failed to update Listing in database' })
    }
    return res.status(200).json({ message: 'Listing updated successfully' })
  } catch (error) {
    return res.status(500).json({ message: 'Failed to updaet Listing', Error: error.message })
  }
}

//get My listings
exports.getMyListings = async (req, res) => {
  try {
    const userID = req.user.id;
    const listings = await getMyListingsDB(userID)
    console.log(listings);
    if (listings.length === 0) {
      return res.status(404).json({ Message: 'Listings not found' })
    }
    return res.status(200).json(listings)
  } catch (error) {
    return res.status(500).json({ Message: 'Failed to get Listings', Error: error.message })
  }
}




