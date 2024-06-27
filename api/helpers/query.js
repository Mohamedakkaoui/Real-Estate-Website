//import schema & mongoose
const mongoose = require('mongoose')
const ListingsSchema = require('../models/schemas/listing.Model')

// query controller
exports.listingFilterOptions = async (req, res) => {
    try {
        let { minPrice, maxPrice, selectedPropertyTypes, selectedStatus, search, ageMin, ageMax } = req.query;
        if (selectedStatus == 'All') { selectedStatus = '.*' }

        const listings = await this.DBgetFiltredListings(minPrice, maxPrice, selectedPropertyTypes, selectedStatus, search, ageMin, ageMax);
        res.status(200).json(listings);
    } catch (error) {
        console.error('Error fetching filtered listings:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
//page = 1, limits = 3, order = 'asc',
// queries method
exports.DBgetFiltredListings = async (minPrice = 0, maxPrice = 1000000, selectedPropertyTypes = '.*', selectedStatus = '.*', search = '.*', ageMax = 350, ageMin = 0) => {
    try {
        const currentYear = new Date().getFullYear()
        const queryResult = await ListingsSchema.find({
            $or: [
                { title: { $regex: new RegExp(search, 'i') } },
                { description: { $regex: new RegExp(search, 'i') } },
                { location: { $regex: new RegExp(search, 'i') } }
            ],
            price: { $gte: parseInt(minPrice), $lte: parseInt(maxPrice) },
            category: { $regex: new RegExp(selectedPropertyTypes, 'i') },
            listingType: { $regex: new RegExp(selectedStatus, 'i') },
            // buildYear: { $gte: currentYear - parseInt(ageMax), $lte: currentYear - parseInt(ageMin) }
        })

        // .skip((page - 1) * limits)
        // .limit(limits);

        return queryResult;
    } catch (error) {
        console.error('Error in DBgetFiltredListings:', error);
        throw error;
    }
};