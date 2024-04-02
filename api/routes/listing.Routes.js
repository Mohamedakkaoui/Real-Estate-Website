//initiating express
const express = require('express')
const ListingRoute = express.Router()




//importing controllers & Middlewares
const { addNewListing, deleteListing, getListings, getListingById } = require('../controllers/listing.Controllers')
const { ListingPicsUpload } = require('../middlewares/multer')
const { isAuthenticated } = require('../middlewares/authMiddlewares')



//setting limit for upload
const ImagesInfo = require('../config/constants')


//defining routes
ListingRoute.get('/',getListings)
ListingRoute.get('/:id',getListingById)
ListingRoute.post('/add', ListingPicsUpload.array('images', ImagesInfo.Max_file_to_Upload), isAuthenticated, addNewListing)
ListingRoute.delete('/:id', isAuthenticated, deleteListing)




// exporting the route
module.exports = ListingRoute
 
