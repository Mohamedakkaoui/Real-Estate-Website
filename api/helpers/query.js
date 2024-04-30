//import schema & mongoose
const mongoose = require('mongoose')
const ListingsSchema = require('../models/schemas/listing.Model')

//query controller
exports.listingFilterOptions = async (req) => {
    const { page, limits, sortBy, order, minPrice, maxPrice, categoryListing, typeListing, search, startDate, endDate } = req.query
    const listings = await this.DBgetFiltredListings(page, limits, sortBy, order, minPrice, maxPrice, categoryListing, typeListing, search, startDate, endDate)
    return listings
}


//queries method
exports.DBgetFiltredListings = async (page = 1, limits = 5, sortBy = 'createdAt', order = 'asc', minPrice = 0, maxPrice = Infinity, city, categoryListing, typeListing, search = "", startDate = 'undefined', endDate = 'undefined') => {
    try {
        const queryResult =
            await ListingsSchema
                .find({
                    title: { $regex: new RegExp(search, 'i') },
                    description: { $regex: new RegExp(search, 'i') },
                    isActive: true,
                    location: { $regex: new RegExp(city, 'i') },
                    price: { $gte: minPrice, $lte: maxPrice },
                    listingType: typeListing,
                    category: categoryListing
                })
                .skip((page - 1) * limits)
                .limit(limits)
                .sort({ [sortBy]: order })

        if (category === 'shortTermRent' && startDate !== undefined && endDate !== undefined) {
            const availableListings = [];
            for (const listing of queryResult) {
                const listingId = listing._id;
                const available = await isAvailable(listingId, startDate, endDate);
                if (available) {
                    availableListings.push(listing)
                }
                else {
                    availableListings.push(...queryResult)
                }
            }
            return availableListings;
        }
        return queryResult;
    }
    catch (error) {
        return error
    }
}
