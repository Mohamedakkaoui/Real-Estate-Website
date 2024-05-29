//initiating express
const express = require('express')
const ListingRoute = express.Router()



//importing controllers & Middlewares
const { addNewListing, deleteListing, getListings, getListingById, updateListing, saveListingUser, getMyListings, GetcityListings } = require('../controllers/listing.Controllers')
const { ListingPicsUpload } = require('../middlewares/multer')
const { isAuthenticated } = require('../middlewares/authMiddlewares')
const { validateListing } = require('../middlewares/validate/validateListing')
const { IsOwner } = require('../middlewares/IsOwner.js')



//setting limit for upload
const ImagesInfo = require('../config/constants')
const verifyRoles = require('../middlewares/roles.js')
const ROLES_LIST = require('../config/Roles_Lists.js')
const { listingFilterOptions } = require('../helpers/query.js')
const { uploadMultiple } = require('../helpers/uploadhelper.js')

//defining routes
ListingRoute.get('/MyListings', isAuthenticated, getMyListings)
ListingRoute.get('/All', getListings)
ListingRoute.get('/filteredListings', listingFilterOptions)
ListingRoute.get('/:id', isAuthenticated, IsOwner, getListingById)
ListingRoute.post('/add',  ListingPicsUpload.array('images', ImagesInfo.Max_file_to_Upload), validateListing, addNewListing)
ListingRoute.delete('/:id', isAuthenticated, verifyRoles(ROLES_LIST.User, ROLES_LIST.Admin), IsOwner, deleteListing)
ListingRoute.patch('/update/:id', isAuthenticated, verifyRoles(ROLES_LIST.Admin, ROLES_LIST.User), IsOwner, ListingPicsUpload.array('images', ImagesInfo.Max_file_to_Upload), updateListing)
ListingRoute.put('/:listingId', isAuthenticated, saveListingUser)
ListingRoute.get('/NearbyListings/:city', GetcityListings)
ListingRoute.post('/pics', ListingPicsUpload.array('images', 8), uploadMultiple)



// exporting the route
module.exports = ListingRoute

