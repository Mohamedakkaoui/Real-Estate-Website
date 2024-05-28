const {
  registerBookingDB,
  updateBookingDB,
  checkListingAvailability,
  priceCalc,
  getBookingByIdDB,
  MyBookingsDB,
  Bookings,
} = require("../models/methods/booking.Methods");
const { getListingById } = require("./listing.Controllers");

//new booking
exports.registerNewBooking = async (req, res) => {
  try {
    const listing = getListingById();
    const listingId = listing._id;
    const user = req.user.id;
    const { startDate, endDate} = req.body;
    const isAvailable = await checkListingAvailability(
      listingId,
      startDate,
      endDate
    )
    if (!isAvailable) {
      return res
        .status(200)
        .json({ Message: "Listing is not available for the specified dates." });
    }
    const totalPrice = await priceCalc(startDate, endDate, listing.price);
    const owner = listing.owner;
    const data = {
      user,
      listing: listingId,
      startDate,
      endDate,
      totalPrice,
      owner,
    };
    const newBooking = await registerBookingDB(data);
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
    const booking = this.getBookingById;
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    booking.status = "cancelled";
    await booking.save();
    return res.status(200).json({ message: "Booking cancelled successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
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
