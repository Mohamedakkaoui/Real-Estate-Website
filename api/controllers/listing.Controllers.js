const { uploadFunction } = require("../helpers/cloudinary");
const { bufferAndUploadMultiple } = require("../helpers/datauri");
const { deleteListingFromDB } = require("../models/methods/listing.Methods");


const ListingsSchema = require("../models/schemas/listing.Model");



// add a new listing
exports.addNewProperty = async (req, res) => {
  try {
    const { title, description, category, listingType, price, size, options, location } = req.body;
    const { id } = req.user;
    const owner = id;
    const images = await bufferAndUploadMultiple(req);
    const newProperty = new ListingsSchema({ title, description, category, listingType, price, size, options, images, location, owner })
    const savedNewProperty = await newProperty.save()
    return res.status(201).send({ message: 'New property added!', result: savedNewProperty })
  } catch (err) {
    return res.status(404).send('Unable to add new property : ' + err)
  }
}

//Delete listing
exports.deleteProperty = async (req, res) => {
  const { id } = req.user
  const { propertyId } = req.params
  const listing = await ListingsSchema.findById(propertyId);
  if (!listing) {
    return res.status(404).json('listing unfound!');
  }

  if (id !== listing.owner) {
    return res.status(401).json('You can only delete your own listings!');
  }
  try {
    await deleteListingFromDB(propertyId)
    return res.status(200).json('Listing has been deleted!');

  } catch (error) {
    return res.send(error)
  }
}
