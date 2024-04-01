//initiating express
const express = require('express')
const { isAuthenticated } = require('../middlewares/authMiddlewares');
const UserRoute = express.Router()

//importing controllers & Middlewares
const { updateUserProfile, getUserById, getAllUsers, updateUserPassword, DeleteUser, GetUserByUsername, updateProfilePic } = require('../controllers/user.Controllers.js');
const { profilePicUpload } = require('../middlewares/multer.js');


//defining routes

UserRoute.route('/profile')
    .put(isAuthenticated, updateUserProfile)
    .get(isAuthenticated, getUserById)
UserRoute.get('/', getAllUsers)
UserRoute.get('/:id', isAuthenticated, getUserById)
UserRoute.put('/profile/change-password', isAuthenticated, updateUserPassword)
UserRoute.put('/profile/add-pic', isAuthenticated, profilePicUpload.single("profilePic"), updateProfilePic)
UserRoute.delete('/profile/delete', isAuthenticated, DeleteUser)
// UserRoute.get('/profile/:username', GetUserByUsername)

// exporting the route
module.exports = UserRoute