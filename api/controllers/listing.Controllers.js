const {
  getAllListingDB,
  getListingByIdDB,
  deleteListingDB,
  AddnewListingDB,
  UpdateListingDB,
  getMyListingsDB,
  FindListingBylocationDB,
  GetListingsBycategeryDB,
  DeleteListingByobjectId,
  getALLListingByUserIdDB,
} = require("../models/methods/listing.Methods");
const { bufferAndUploadMultiple } = require("../helpers/datauri");
const generateCustomUUID = require("../Utils/customUuidGenerator.js");
const { saveListingForUser } = require("../models/methods/user.Methods.js");
const { GetListingReviewsDB } = require("../models/methods/reviews.Methods.js");

//save listing for user
exports.saveListingUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const listingId = req.params.listingId;
    const user = await saveListingForUser(userId, listingId);
    return res.status(201).send(user);
  } catch (error) {
    return res.status(500).json({ Message: "Internal Server Error" });
  }
};

//All listing
exports.getListings = async (req, res) => {
  try {
    const listings = await getAllListingDB();
    if (listings.length === 0) {
      return res.status(404).json({ Message: "Listings not found" });
    }
    return res
      .status(200)
      .json({ Message: "Listings retrved successfully", Listings: listings });
  } catch (error) {
    return res
      .status(500)
      .json({ Message: "Failed to get Listings", Error: error.message });
  }
};

// add a new listing
exports.addNewListing = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      listingType,
      price,
      size,
      options,
      location,
      city,
    } = req.body;
    const owner = req.user.id;
    const images = await bufferAndUploadMultiple(req);
    const Object_id = generateCustomUUID();
    const newProperty = await AddnewListingDB({
      title,
      description,
      category,
      listingType,
      price,
      size,
      options,
      images,
      location,
      owner,
      Object_id,
      city,
    });
    return res
      .status(201)
      .json({ Message: "New property added!", result: newProperty });
  } catch (err) {
    return res
      .status(404)
      .json({ Message: "Unable to add new property", Error: err.message });
  }
};

//Delete listing
exports.deleteListing = async (req, res) => {
  try {
    const { id } = req.params;
    const ListingtoDelete = await deleteListingDB(id);
    if (!ListingtoDelete) {
      return res.status(400).json({ message: "Error while deleting Listing" });
    }
    return res.status(200).json("Listing has been deleted!");
  } catch (err) {
    return res
      .status(404)
      .json({ message: "Unable to Delete property", Error: err.message });
  }
};

//Delete listing by object ID
exports.DeleteListingByObject = async (req, res) => {
  try {
    const { id } = req.params;
    const Listingtodelete = await DeleteListingByobjectId(id);
    if (Listingtodelete.deletedCount == 0) {
      return res.status(404).send("Property Not Found");
    }
    return res.status(200).json({
      Message: "Property deleted with success",
      Result: Listingtodelete,
    });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "Unable to Delete property", Error: err.message });
  }
};

// get property by Id
exports.getListingById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).json({ message: "No property ID was provided." });
    }
    const property = await getListingByIdDB(id);
    if (!property) {
      return res
        .status(404)
        .json({ message: "No property was found for the provided ID" });
    }
    const fetchId = property._id.toString();

    const reviews = await GetListingReviewsDB(fetchId)
    return res
      .status(200)
      .json({ message: "data retrieved successfully", property: property, reviews: reviews });
  } catch (err) {
    return res.status(500).json({
      message: "Unable to retrieve data. Please try again later.",
      Error: err.message,
    });
  }
};




//Update property

exports.updateListing = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    if (!id) {
      return res.status(400).json({ message: "No property ID was provided." });
    }
    const {
      title,
      description,
      category,
      listingType,
      price,
      size,
      options,
      images,
      location,
      latitude, longitude, rooms, bathrooms, accomodation
    } = req.body;
    const data = {
      title,
      description,
      category,
      listingType,
      price,
      size,
      images,
      options,
      location, latitude, longitude, rooms, bathrooms, accomodation
    };
    if (!data) {
      return res.status(400).json({ message: "No Data was provided" });
    }
    const updatedListing = await UpdateListingDB(id, data);
    if (!updatedListing) {
      return res
        .status(500)
        .json({ message: "Failed to update Listing in database" });
    }
    return res.status(200).json({ message: "Listing updated successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to updaet Listing", Error: error.message });
  }
};

//get My listings
exports.getMyListings = async (req, res) => {
  try {
    const userID = req.user.id;
    const listings = await getMyListingsDB(userID);
    if (listings.length === 0) {
      return res
        .status(200)
        .json({ Message: "Listings not found", Listings: [] });
    }
    return res
      .status(200)
      .json({ Message: "Listings retrieved succefully", Listings: listings });
  } catch (error) {
    return res
      .status(500)
      .json({ Message: "Failed to get Listings", Error: error.message });
  }
};

//get Listing in your city
exports.GetcityListings = async (req, res) => {
  try {
    const { city } = req.params; //city comes
    const listings = await FindListingBylocationDB(city); //issue is here
    if (!listings) {
      return res.status(404).json({ Message: "No listings nearby were Found" });
    }
    return res
      .status(200)
      .json({ Message: "Listings retrieved succefully", Listings: listings });
  } catch (error) {
    return res
      .status(500)
      .json({ Message: "Failed to get Listings", Error: error.message });
  }
};

//get my fav
exports.getAllFavorite = async (req, res) => {
  const { id } = req.user;
  try {
    const user = await GetUserbyIdallInfoDB(id)
    if (!user) {
      return res.status(404).send("User not found");
    }
    const listings = await getALLListingByUserIdDB(user.watchList.toString())
    if (!listings) {
      return res.status(404).send("listings not found")
    }
    res.status(200).json({ Message: "listings retrieved with success", Listings: listings });
  } catch (error) {
    res.status(500).send(error.message)
  }
}