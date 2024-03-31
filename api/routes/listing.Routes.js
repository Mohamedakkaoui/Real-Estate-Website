//initiating express
const express = require('express')
const { isAuthenticated } = require('../middlewares/authMiddlewares');
const ListingRoute = express.Router()

//importing controllers & Middlewares
const { addNewProperty } = require('../controllers/listing.Controllers');
const { ListingPicsUpload } = require('../middlewares/multer');


//defining routes

ListingRoute.post('/add', ListingPicsUpload.array('image'), addNewProperty)

// UserRoute.get('/:id', isAuthenticated, getUserById)
// ListingRoute.put('/:id', )
// ListingRoute.delete('/delete/:id', isAuthenticated, DeleteUser)

// exporting the route
module.exports = ListingRoute