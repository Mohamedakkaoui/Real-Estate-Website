const bookingSchema = require("../schemas/BookingsModel");
const mongoose = require("mongoose");

//new booking
exports.registerBookingDB = async (data) => {
  try {
    const booking = new bookingSchema(data);
    return await booking.save();
  } catch (err) {
    throw new Error(err);
  }
};

//update booking
exports.UpdateBooking = async (id, data) => {
  try {
    const updatedBooking = await bookingSchema.findByIdAndUpdate(
      { Object_id: id },
      data,
      { new: true }
    );
    return updatedBooking;
  } catch (err) {
    throw new Error(err);
  }
};

//cancel booking
exports.cancelBooking = async (id, data) => {
  try {
    const updatedBooking = await bookingSchema.findByIdAndUpdate(
      { Object_id: id },
      data,
      { new: true }
    );
    return updatedBooking;
  } catch (err) {
    throw new Error(err);
  }
};
//get booking
exports.getBookingByIdDB = async (id) => {
    try {

        const booking = await bookingSchema.findOne({ _id: id })
        return booking

    } catch (error) {
        throw new Error('Failed to get booking by ID: ' + error)
    }
};

//update booking from DB
exports.UpdateBookingDB = async (id, data) => {
  try {
    return await bookingSchema.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    return error;
  }
};

//calculate price
exports.priceCalc = async (startDate, endDate, price) => {
  const durationInDays = Math.ceil(
    (endDate - startDate) / (1000 * 60 * 60 * 24)
  );
  const totalPrice = durationInDays * price;
  return totalPrice;
};

//availibility check
exports.checkListingAvailability = async (listingId, startDate, endDate) => {
  try {
    const overlappingBookings = await bookingSchema.find({
      listings: listingId,
      startDate: { $lt: endDate },
      endDate: { $gt: startDate },
      status: { $in: ["confirmed", "pending"] },
    });
    return overlappingBookings.length === 0;
  } catch (error) {
    return false;
  }
};

//myBookings
exports.MyBookingsDB = async (id) => {
  try {
    return await bookingSchema
      .find({ user: id })
      .populate("property_id", "title images price")
  } catch (error) {
    throw new error(error);
  }
}


//get all bookings
exports.getBookingsDB = async () => {
    try {
        const bookings = await bookingSchema.find().select('-owner -_id').populate('user', 'FirstName LastName Email ProfilePic -_id').populate('listing', 'title price images -_id')
        return bookings

    } catch (error) {
        throw new Error('Failed to get bookings ' + error)
    }
};