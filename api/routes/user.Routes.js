const  {DeleteUser} = require('../controllers/user.Controllers')
const express = require('express')
const UserRoute = express.Router()



UserRoute.delete('/profile', DeleteUser)



module.exports = UserRoute