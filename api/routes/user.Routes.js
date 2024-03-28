const  {DeleteUser, getAllUsers, getUserById} = require('../controllers/user.Controllers')
const express = require('express')
const {isAuthenticated}=require('../middlewares/authMiddlewares');
const UserRoute = express.Router()


UserRoute.get('/',getAllUsers)
UserRoute.get('/:id',isAuthenticated,getUserById)
UserRoute.delete('/profile', DeleteUser)



module.exports = UserRoute