//import midllewares and packs
const express = require('express');
const { getRegister, getLogin, ResetPassword ,  GenrateTempToken} = require('../controllers/auth.Controllers');
const AuthRoute = express.Router();
const { AvoidAuth } = require('../middlewares/avoidAuth')


//Authentication

AuthRoute.post('/register', AvoidAuth, getRegister)
AuthRoute.get('/login', AvoidAuth, getLogin)
AuthRoute.get('/reset-password', GenrateTempToken)
AuthRoute.post('/reset-password/:id/:token', ResetPassword)

//export route
module.exports = AuthRoute