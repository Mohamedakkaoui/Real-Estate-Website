//initiating express
const express = require('express')
const ListingRoute = express.Router()

//importing controllers & Middlewares
const { addNewProperty, deleteProperty } = require('../controllers/listing.Controllers');
const { ListingPicsUpload } = require('../middlewares/multer');
const { isAuthenticated } = require('../middlewares/authMiddlewares');

//setting limit for upload
const maxFiles = 8;
//defining routes

ListingRoute.post('/add', ListingPicsUpload.array('image', maxFiles), isAuthenticated, addNewProperty)
ListingRoute.delete('/:propertyId', isAuthenticated, deleteProperty)

// exporting the route
module.exports = ListingRoute