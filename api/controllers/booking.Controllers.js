const generateCustomUUID = require("../Utils/customUuidGenerator");
const { mailsender } = require("../middlewares/nodemailer");
const {
  registerBookingDB,
  updateBookingDB,
  checkListingAvailability,
  priceCalc,
  getBookingByIdDB,
  MyBookingsDB,
  Bookings,
  getBookingsDB,
  DeleteBookingDb,
  MylisitingsBookingsDB,
  permissionToBook,
  MyBookingsDBDet,
  GetListingBookingsDB
} = require("../models/methods/booking.Methods");
const {
  getListingByIdDB,
  getALLListingByUserIdDB,
} = require("../models/methods/listing.Methods");
const { GetUserbyIdallInfoDB } = require("../models/methods/user.Methods");
const { getListingById } = require("./listing.Controllers");

//new booking
exports.registerNewBooking = async (req, res) => {
  try {
    const user = req.user.id;
    const User = await GetUserbyIdallInfoDB(user);
    const { startDate, endDate,ID, ObjectID, totalPrice } = req.body;
    const Listing = await getALLListingByUserIdDB(ObjectID);
    const owner = Listing[0].owner;
    const Object_id = generateCustomUUID();
    const data = {
      Object_id,
      user,
      listing: ID,
      startDate,
      endDate,
      totalPrice,
      owner,
    };
    const newBooking = await registerBookingDB(data);
    mailsender(
      User.Email,
      "ConfirmationForReserve",
      Listing[0].title,
      Listing[0].city,
      startDate,
      endDate,
      totalPrice,
      Object_id,
      Listing[0].location,
      User.Username,
      User.Email,
      User.PhoneNumber
    );
    return res
      .status(201)
      .json({ message: "New booking added!", result: newBooking });
  } catch (err) {
    return res
      .status(404)
      .json({ Message: "Unable to add new booking", Error: err.message });
  }
};

//get booking
exports.getBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).json({ message: "No booking ID was provided." });
    }
    const booking = await getBookingByIdDB(id);
    if (!booking) {
      return res
        .status(404)
        .json({ message: "No booking was found for the provided ID" });
    }
    return res
      .status(200)
      .json({ message: "booking retrieved successfully", property: property });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Unable to retrieve booking. ", Error: err.message });
  }
};

//update booking

exports.updateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "No booking ID was provided." });
    }
    const booking = this.getBookingById;
    const { startDate, endDate } = req.body;
    const isAvailable = await checkListingAvailability(
      booking._id,
      startDate,
      endDate
    );
    if (!isAvailable) {
      return res
        .status(200)
        .json({ Message: "Listing is not available for the specified dates." });
    } else {
      const totalPrice = await priceCalc(startDate, endDate, booking.price);
    }
    const data = { startDate, endDate, totalPrice };
    if (!data) {
      return res.status(400).json({ message: "No Data was provided" });
    }
    const updatedBooking = await updateBookingDB(id, data);
    if (!updatedBooking) {
      return res
        .status(500)
        .json({ message: "Failed to update booking in database" });
    }
    return res.status(200).json({ message: "booking updated successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to update booking", Error: error.message });
  }
};

// cancel a booking
exports.cancelBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await getBookingByIdDB(id);
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    if (booking.status == "canceled") {
      return res.status(406).json({message : "Booking already canceled"})
    }
    booking.status = "canceled";
    await booking.save();
    return res.status(200).json({ message: "Booking canceled successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error", message  :  "Booking couldnt be canceled" });
  }
};

// get owner's permission to book a proprety
exports.OwnerPermissionToBook = async (req, res) => {
  try {
    const userId = req.user;
    const propertyId = req.params.propertyId;
    const result = await permissionToBook(userId, propertyId);
    res.status(result.status).json(result.body);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//MyBookings
exports.getMyBooking = async (req, res) => {
  try {
    const { id } = req.user;
    const mybookings = await MyBookingsDB(id);
    return res.status(200).json({
      Message: "my bookings retrieved successflly",
      MyBookings: mybookings,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ Message: "Error getting my bookings", Error: error.message });
  }
};

//MyBookings detailed
exports.getMyBookingDet = async (req, res) => {
  try {
    const { id } = req.user;
    const mybookings = await MyBookingsDBDet(id);
    return res.status(200).json({
      Message: "my bookings retrieved successflly",
      MyBookings: mybookings,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ Message: "Error getting my bookings", Error: error.message });
  }
};

exports.getBooking = async (req, res) => {
  try {
    const mybookings = await Bookings();
    return res.status(200).json({
      Message: "my bookings retrieved successflly",
      MyBookings: mybookings,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ Message: "Error getting my bookings", Error: error.message });
  }
};

//delete Booking
exports.DeleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBooking = await DeleteBookingDb(id);
    return res.status(200).json({
      Message: "Property deleted with success",
      Result: deleteBooking,
    });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "Unable to Delete Bookig", Error: error.message });
  }
};

//get all bookings
exports.getBookings = async (req, res) => {
  try {
    const bookings = await getBookingsDB();
    if (!bookings) {
      return res.status(404).json({ message: "No bookings" });
    }
    return res.status(200).json(bookings);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Unable to retrieve bookings. ", Error: err.message });
  }
};

//get my lisitings bookings
exports.MyListingsBookings = async (req, res) => {
  try {
    const { id } = req.user;
    const bookings = await MylisitingsBookingsDB(id);
    if (bookings.length == 0) {
      return res
        .status(204)
        .json({ Message: "fetch succesfully but not Booking found" });
    }
    return res.status(200).json({
      Message: "my bookings retrieved successflly",
      Bookings: bookings,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Unable to retrieve bookings. ", Error: error.message });
  }
};

// get owner's permission to book a proprety

exports.OwnerPermissionToBook = async (req, res) => {
  try {
    const userId = req.user;
    const propertyId = req.params.propertyId;
    const result = await permissionToBook(userId, propertyId);
    res.status(result.status).json(result.body);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


//Get all booking controllers 
exports.GetListingsBooking = async (req, res) => {
  try {
    const { id } = req.params
    const bookings = await GetListingBookingsDB(id)
    if (!bookings) {
      return res.status(404).json({Message : "No booking were found"})
    }
    return res.status(200).json({Message : "Booking retrieved with success", Bookings : bookings})
  } catch (error) {
    console.log(error)
    res.status(500).json({error  :"Internal server Error " , Message : err.data.message})
  }
}