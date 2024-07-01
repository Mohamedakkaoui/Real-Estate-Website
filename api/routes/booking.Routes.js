//initiating express
const express = require('express')
const bookingRoute = express.Router()

//importing controllers & Middlewares
const { isAuthenticated } = require('../middlewares/authMiddlewares')

//defining routes
const { getBookingById, registerNewBooking, updateBooking, cancelBooking, OwnerPermissionToBook, getBookings, getMyBooking, DeleteBooking, MyListingsBookings, getMyBookingDet, GetListingsBooking, ConfirmBooking } = require('../controllers/booking.Controllers')


//defining routes
bookingRoute.post('/new', isAuthenticated, registerNewBooking)
bookingRoute.get("/myBookings", isAuthenticated, getMyBooking)
bookingRoute.get("/myBookingsDetailed", isAuthenticated, getMyBookingDet)
bookingRoute.get("/MylistingsBooking", isAuthenticated, MyListingsBookings)
bookingRoute.get('/AllBookings/:id', isAuthenticated, GetListingsBooking)
bookingRoute.get('/', isAuthenticated, getBookings)
bookingRoute.patch('/Confirm/:id', ConfirmBooking)
bookingRoute.patch('/cancel/:id', isAuthenticated, cancelBooking)
bookingRoute.get('/:id', isAuthenticated, getBookingById)
bookingRoute.patch('/:id', isAuthenticated, updateBooking)
bookingRoute.delete('/delete/:id', DeleteBooking)
bookingRoute.post('/:propertyId', isAuthenticated, OwnerPermissionToBook);




// exporting the route
module.exports = bookingRoute