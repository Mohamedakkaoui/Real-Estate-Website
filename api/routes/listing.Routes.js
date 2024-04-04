
//initiating express
const express = require('express')
const ListingRoute = express.Router()


const{isAuthenticated}=require('../middlewares/authMiddlewares')
const { saveListingUser } = require('../controllers/listing.Controllers');

// Route to save a listing for a user
ListingRoute.put('/:listingId',isAuthenticated,saveListingUser)

module.exports = ListingRoute