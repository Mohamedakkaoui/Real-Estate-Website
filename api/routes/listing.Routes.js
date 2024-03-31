//initiating express
const express = require('express')
const ListingRoute = express.Router()

//importing controllers & Middlewares
const { addNewProperty, deleteProperty } = require('../controllers/listing.Controllers');
const { ListingPicsUpload } = require('../middlewares/multer');
const { isAuthenticated } = require('../middlewares/authMiddlewares');


//defining routes

ListingRoute.post('/add', ListingPicsUpload.array('image'), isAuthenticated, addNewProperty)
ListingRoute.delete('/:propertyId', isAuthenticated, deleteProperty)

// exporting the route
module.exports = ListingRoute