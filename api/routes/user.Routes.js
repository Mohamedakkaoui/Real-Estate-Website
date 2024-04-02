//initiating express
const express = require('express')
const UserRoute = express.Router()

//importing controllers & Middlewares
const { updateUserProfile, getUserById, getAllUsers, updateUserPassword, DeleteUser, GetUserByUsername, updateProfilePic } = require('../controllers/user.Controllers.js')
const { profilePicUpload } = require('../middlewares/multer.js')
const { isAuthenticated } = require('../middlewares/authMiddlewares')
const ROLES_LIST = require('../config/Roles_Lists.js')
const verifyRoles = require('../middlewares/roles.js')


//defining routes
UserRoute.route('/profile')
    .put(isAuthenticated,verifyRoles(ROLES_LIST.Admin, ROLES_LIST.User), updateUserProfile)
    .get(isAuthenticated, verifyRoles(ROLES_LIST.Admin, ROLES_LIST.User, ROLES_LIST.Guest),getUserById)

UserRoute.get('/', verifyRoles(ROLES_LIST.Admin),getAllUsers)
UserRoute.get('/:id', isAuthenticated,verifyRoles(ROLES_LIST.User, ROLES_LIST.Admin), getUserById)
UserRoute.put('/profile/change-password', isAuthenticated,verifyRoles(ROLES_LIST.User), updateUserPassword)
UserRoute.put('/profile/add-pic', isAuthenticated,verifyRoles(ROLES_LIST.User), profilePicUpload.single("profilePic"), updateProfilePic)
UserRoute.delete('/profile/delete', isAuthenticated,verifyRoles(ROLES_LIST.Guest, ROLES_LIST.User), DeleteUser)
// UserRoute.get('/profile/:username', verifyRoles(ROLES_LIST.Admin),GetUserByUsername)


// exporting the route
module.exports = UserRoute