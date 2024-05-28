//initiating express
const express = require('express')
const bookingRoute = express.Router()

//importing controllers & Middlewares
const { isAuthenticated } = require('../middlewares/authMiddlewares')

//defining routes
const { getBookingById, registerNewBooking, updateBooking, cancelBooking, getBookings, getMyBooking } = require('../controllers/booking.Controllers')

//defining routes
bookingRoute.get("/myBookings", isAuthenticated, getMyBooking)
bookingRoute.get('/', isAuthenticated, getBookings)
bookingRoute.get('/:id', isAuthenticated, getBookingById)
bookingRoute.post('/new', isAuthenticated, registerNewBooking)
bookingRoute.patch('/:id', isAuthenticated, updateBooking)
bookingRoute.patch('/:id', isAuthenticated, cancelBooking)


// exporting the route
module.exports = bookingRoute