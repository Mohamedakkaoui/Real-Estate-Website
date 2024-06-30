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
const { saveListingForUser, GetUserbyIdallInfoDB, DeleteSavedListingForUser } = require("../models/methods/user.Methods.js");
const { GetListingReviewsDB } = require("../models/methods/reviews.Methods.js");
const { DeleteBookingslDB } = require("../models/methods/booking.Methods.js");

//save listing for user
exports.saveListingUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const listingId = req.params.listingId;
    const user = await saveListingForUser(userId, listingId);
    if (user.error) {
      return res.status(400).json(user);
    }
    return res.status(201).json({ message: 'Listing saved successfully', user });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};
// Delete saved listing from te use watchlist
exports.DeleteSavedListingforUser = async(req, res)=> {
  try {
    const userId = req.user.id;
    const ListingID = req.params.ListingID;
    const response = await DeleteSavedListingForUser( userId, ListingID)
    return res.status(200).json({Message : "Listing Unsaved with success", response})
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
}

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
      images,
      rooms,
      bathrooms,
      accomodation,
      latitude,
      longitude,
      buildYear
    } = req.body;
    const owner = req.user.id;
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
      rooms,
      bathrooms,
      accomodation,
      latitude,
      longitude,
      buildYear
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
      return res.status(400).json({ message: "Error while deleting Property" });
    }
    const BookingsDeleted = await DeleteBookingslDB(ListingtoDelete._id)
    if (BookingsDeleted.deletedCount === 0) {
      console.log('No Bookings found for the given ID')
    }
    console.log(`${BookingsDeleted.deletedCount} Bookigs deleted`)
    return res.status(200).json({Message : "Property has been deleted!", Bookings : BookingsDeleted, Listing : ListingtoDelete});
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
    if (!Listingtodelete) {
      return res.status(400).json({ Message: "Error while deleting Property" });
    }
    const BookingsDeleted = await DeleteBookingslDB(Listingtodelete._id)
    if (BookingsDeleted.deletedCount === 0) {
      console.log('No Bookings found for the given ID')
    }
    console.log(`${BookingsDeleted.deletedCount} Bookings deleted`)
    return res.status(200).json({
      Message: "Property deleted with success",
      Result: Listingtodelete,
    });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "Unable to Delete property", Error: error.message });
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

// getAllFavorite.js
exports.getAllFavorite = async (req, res) => {
  const { id } = req.user;
  try {
    const user = await GetUserbyIdallInfoDB(id);
    if (!user) {
      return res.status(404).send("User not found");
    }

    if (!Array.isArray(user.watchList)) {
      user.watchList = [];
    }


    const listings = await getALLListingByUserIdDB(user.watchList);

    if (!listings.length) {
      return res.status(404).send("Listings not found");
    }


    res.status(200).json({ Message: "Listings retrieved with success", Listings: listings });
  } catch (error) {
    res.status(500).json({ Message: "Internal Server Error", error: error.message });
  }
};