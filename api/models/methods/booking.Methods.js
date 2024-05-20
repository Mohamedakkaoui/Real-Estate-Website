const bookingSchema = require('../schemas/BookingsModel')
const mongoose = require('mongoose')

//new booking
exports.registerBookingDB = async (data) => {
    try {
        const booking = new bookingSchema(data)
        return await booking.save()
    } catch (err) {
        throw new Error(err)
    }
}

//update booking 
exports.UpdateBooking = async (id, data) => {
    try {
        const updatedBooking = await bookingSchema.findByIdAndUpdate({ Object_id: id }, data, { new: true })
        return updatedBooking
    } catch (err) {
        throw new Error(err)
    }
}

//cancel booking
exports.cancelBooking = async (id, data) => {
    try {
        const updatedBooking = await bookingSchema.findByIdAndUpdate({ Object_id: id }, data, { new: true })
        return updatedBooking
    } catch (err) {
        throw new Error(err)
    }
}
//get booking
exports.getBookingByIdDB = async (id) => {
    try {

        const booking = await ListingsSchema.findOne({ _id: id })
        return booking

    } catch (error) {
        throw new Error('Failed to get booking by ID: ' + error)
    }
};

//update booking from DB
exports.UpdateBookingDB = async (id, data) => {
    try {
        return await bookingSchema.findByIdAndUpdate(id, data, { new: true })
    }
    catch (error) {
        return error
    }
}


//calculate price
exports.priceCalc = async (startDate, endDate, price) => {
    const durationInDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    const totalPrice = durationInDays * price;
    return totalPrice
}

//availibility check
exports.checkListingAvailability = async (listingId, startDate, endDate) => {
    try {
        const overlappingBookings = await bookingSchema.find({
            listings: listingId,
            startDate: { $lt: endDate },
            endDate: { $gt: startDate },
            status: { $in: ['confirmed', 'pending'] }
        });

        return overlappingBookings.length === 0
    } catch (error) {
        console.error('Error checking availability:', error)
        return false
    }
}
//owner's permission
const ListingsSchema = require('../schemas/listing.Model');
const UserSchema = require('../schemas/user.Model');
exports.permissionToBook = async (userId, propertyId, startDate, endDate, totalPrice) => {
    try {
        const isAvailable = await checkListingAvailability(propertyId, startDate, endDate);
        if (!isAvailable) {
            return { status: 403, body: { error: "Listing is not available for the specified dates." } };
        }

        const user = await UserSchema.findById(userId);
        if (!user) {
            return { status: 401, body: { error: "Unauthorized" } };
        }

        // Check if user has permission to book properties (Vous pouvez ajouter votre logique ici)
        if (!user.canBook) {
            return { status: 403, body: { error: "Forbidden" } };
        }

        // Check if the user is the owner of the property (Vous pouvez ajouter votre logique ici)
        const property = await ListingsSchema.findById(propertyId);
        if (!property) {
            return { status: 404, body: { error: "Property not found" } };
        }

        // Notify owner and await confirmation (this could be an email, notification, etc.)
        // For simplicity, we'll assume the owner always approves the booking
        const ownerConfirmation = true;

        // If owner confirms, proceed with booking
        if (ownerConfirmation) {
            // Mettre à jour le statut de la réservation à "confirmed"
            const booking = new Booking({
                listing: propertyId,
                user: userId,
                startDate: startDate,
                endDate: endDate,
                totalPrice: totalPrice,
                owner: property.owner,
                status: 'confirmed' // Mettre à jour le statut de la réservation
            });
            await booking.save();
        } else {
            return { status: 403, body: { error: "Owner declined the booking" } };
        }

        return { status: 200, body: { message: "Booking successful" } };
    } catch (err) {
        console.error(err);
        return { status: 500, body: { error: "Internal Server Error" } };
    }
}
