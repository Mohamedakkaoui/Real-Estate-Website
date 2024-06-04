//initiating express
const express = require('express')
const bookingRoute = express.Router()

//importing controllers & Middlewares
const { isAuthenticated } = require('../middlewares/authMiddlewares')
const { getBookingById, registerNewBooking, updateBooking, cancelBooking,OwnerPermissionToBook,getBookings,getMyBooking } = require('../controllers/booking.Controllers')


//defining routes
bookingRoute.get("/myBookings", isAuthenticated, getMyBooking)
bookingRoute.get('/', isAuthenticated, getBookings)
bookingRoute.get('/:id', isAuthenticated, getBookingById)
bookingRoute.post('/new', isAuthenticated, registerNewBooking)
bookingRoute.patch('/:id', isAuthenticated, updateBooking)
bookingRoute.patch('/:id', isAuthenticated, cancelBooking)
//bookingRoute.post('/:propertyId',isAuthenticated,OwnerPermissionToBook);

// exporting the route
module.exports = bookingRoute