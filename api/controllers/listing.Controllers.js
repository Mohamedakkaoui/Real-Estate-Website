const {getAllListingDB , getListingByIdDB , deleteListingDB , AddnewListingDB}=require('../models/methods/listing.Methods')
const { bufferAndUploadMultiple } = require("../helpers/datauri")


//All listing
exports.getListings = async (req, res) => {
  try {
    const listings = await getAllListingDB()
    if (listings.length === 0) { 
      return res.status(404).json({ Message: 'Listings not found' })
    }
    res.status(200).json(listings)
  } catch (error) {
    return res.status(500).json({ Message: 'Failed to get Listings' , Error : error.message})
  }
}

// add a new listing
exports.addNewListing = async (req, res) => {
  try {
    const { title, description, category, listingType, price, size, options, location } = req.body
    const owner = req.user.id
    const images = await bufferAndUploadMultiple(req)
    const newProperty = await AddnewListingDB({ title, description, category, listingType, price, size, options, images, location, owner })
    return res.status(201).send({ message: 'New property added!', result: newProperty })
  } catch (err) {
    return res.status(404).json({Message : 'Unable to add new property', Error : err.message })
  }
}

//Delete listing
exports.deleteListing = async (req, res) => {
  const OwnerId = req.user.id
  const { id } = req.params
  const listing = await getListingByIdDB(id)
  if (!listing) {
    return res.status(404).json('listing unfound!');
  }
  if (OwnerId !== listing.owner) {
    return res.status(401).json('You can only delete your own listings!');
  }
  try {
    await deleteListingDB(id)
    return res.status(200).json('Listing has been deleted!');

  } catch (err) {
    return res.status(404).json({message : 'Unable to Delete property', Error : err.message})
  }
}



// get property by Id 
exports.getListingById = async (req, res) => {
  try {
    const { id } = req.params
    if (!id) {
      return res.status(404).json({ message: 'No property ID was provided.' })
    }
    console.log(id)
    const property = await getListingByIdDB(id)
    if (!property) {
      return res.status(404).json({ message: 'No property was found for the provided ID' })
    }
    return res.status(200).json({ message: 'Property retrieved successfully', property : property })
  } catch (err) {
    return res.status(500).json({ message: 'Unable to retrieve property. Please try again later.', Error: err.message })
  }
}
