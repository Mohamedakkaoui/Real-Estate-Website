const  {DeleteUser, getAllUsers} = require('../controllers/user.Controllers')
const express = require('express')

const UserRoute = express.Router()


UserRoute.get('/',getAllUsers)
UserRoute.delete('/profile', DeleteUser)



module.exports = UserRoute