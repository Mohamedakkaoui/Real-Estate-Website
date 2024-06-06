//initiating express
const express = require('express')
const bookingRoute = express.Router()

//importing controllers & Middlewares
const { isAuthenticated } = require('../middlewares/authMiddlewares')


//defining routes
const { getBookingById, registerNewBooking, updateBooking, cancelBooking,OwnerPermissionToBook,  getBookings, getMyBooking, DeleteBooking } = require('../controllers/booking.Controllers')


//defining routes
bookingRoute.post('/new', isAuthenticated, registerNewBooking)
bookingRoute.get("/myBookings", isAuthenticated, getMyBooking)
bookingRoute.get('/', isAuthenticated, getBookings)
bookingRoute.get('/:id', isAuthenticated, getBookingById)
bookingRoute.patch('/:id', isAuthenticated, updateBooking)
bookingRoute.patch('/:id', isAuthenticated, cancelBooking)
bookingRoute.delete('/delete/:id', DeleteBooking)
bookingRoute.post('/:propertyId',isAuthenticated,OwnerPermissionToBook);



// exporting the route
module.exports = bookingRoute