//initiating express
const express = require('express')
const ListingRoute = express.Router()

//importing controllers & Middlewares
const { addNewProperty, deleteProperty, getListings, getPropertyById } = require('../controllers/listing.Controllers');
const { ListingPicsUpload } = require('../middlewares/multer');
const { isAuthenticated } = require('../middlewares/authMiddlewares');
const { getPropertyByIdDB } = require('../models/methods/listing.Methods');

//setting limit for upload
const maxFiles = 8;
//defining routes
ListingRoute.get('/',getListings)
ListingRoute.get('/:property_id',getPropertyById)
ListingRoute.post('/add', ListingPicsUpload.array('image', maxFiles), isAuthenticated, addNewProperty)
ListingRoute.delete('/:propertyId', isAuthenticated, deleteProperty)

// exporting the route
module.exports = ListingRoute
 
