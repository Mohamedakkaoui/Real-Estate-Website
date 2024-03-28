//initiating express
const express = require('express')
const { isAuthenticated } = require('../middlewares/authMiddlewares');
const UserRoute = express.Router()

//importing controllers & Middlewares
const { updateUserProfile, getUserById, getAllUsers, updateUserPassword, DeleteUser } = require('../controllers/user.Controllers.js')


//defining routes

UserRoute.route('/profile')
    .put(isAuthenticated, updateUserProfile)
    .get(isAuthenticated, getUserById)
UserRoute.get('/', getAllUsers)
// UserRoute.get('/:id', isAuthenticated, getUserById)
UserRoute.put('/profile/change-password', isAuthenticated, updateUserPassword)
UserRoute.delete('/profile/delete', isAuthenticated, DeleteUser)


// exporting the route
module.exports = UserRoute