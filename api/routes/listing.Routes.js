//initiating express
const express = require('express')
const ListingRoute = express.Router()

const { saveListingUser } = require('../controllers/listing.Controllers');

// Route to save a listing for a user
ListingRoute.put('/:listingId',isAuthenticated,saveListingUser)

module.exports = ListingRoute



//importing controllers & Middlewares
const { addNewListing, deleteListing, getListings, getListingById , updateListing} = require('../controllers/listing.Controllers')
const { ListingPicsUpload } = require('../middlewares/multer')
const { isAuthenticated } = require('../middlewares/authMiddlewares')
const { IsOwner } = require ('../middlewares/IsOwner.js')


//setting limit for upload
const ImagesInfo = require('../config/constants')
const verifyRoles = require('../middlewares/roles.js')
const ROLES_LIST = require('../config/Roles_Lists.js')

//defining routes
ListingRoute.get('/', getListings)
ListingRoute.get('/:id', isAuthenticated, IsOwner, getListingById)
ListingRoute.post('/add', isAuthenticated, ListingPicsUpload.array('images', ImagesInfo.Max_file_to_Upload), addNewListing)
ListingRoute.delete('/:id', isAuthenticated, verifyRoles(ROLES_LIST.User, ROLES_LIST.Admin), IsOwner, deleteListing)
ListingRoute.patch('/update/:id',isAuthenticated, verifyRoles(ROLES_LIST.Admin, ROLES_LIST.User), IsOwner, ListingPicsUpload.array('images', ImagesInfo.Max_file_to_Upload), updateListing)



// exporting the route
module.exports = ListingRoute

