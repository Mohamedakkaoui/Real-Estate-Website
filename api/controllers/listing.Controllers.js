const { uploadFunction } = require("../helpers/cloudinary");
const { bufferAndUploadMultiple } = require("../helpers/datauri");


const ListingsSchema = require("../models/schemas/listing.Model");



// add a new listing
exports.addNewProperty = async (req, res) => {
  try {
    const { title, description, category, listingType, price, size, options, location } = req.body;
    // const owner = req.user.id
    console.log(title)
    // if (req.files) {
    // }
    const images = await bufferAndUploadMultiple(req);

    const newProperty = new ListingsSchema({ title, description, category, listingType, price, size, options, images, location })
    const savedNewProperty = await newProperty.save()
    return res.status(201).send({ message: 'New property added!', result: savedNewProperty })
  } catch (err) {
    console.log(err)
    return res.status(404).send('Unable to add new property : ' + err)
  }
}

//Delete listing
exports.deleteProperty = async (req, res) => {
  const { id } = req.user.id

  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    return res.status(404).json('listing unfound!');
  }

  if (id !== listing.owner) {
    return res.status(401).json('You can only delete your own listings!');
  }
  try {
    const deleteUser = await DeleteUserDB(id)
  } catch (error) {
    throw error
  }
}
