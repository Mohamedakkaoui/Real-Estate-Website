const express = require('express');
const { getRegister,getLogin,GenrateTempToken,ResetPassword,logout} = require('../controllers/auth.Controllers');
const {verifyemail}=require('../controllers/verifyEmail.Controllor')
const AuthRoute = express.Router();
const { AvoidAuth } = require('../middlewares/avoidAuth')



//Authentication

AuthRoute.post('/register', AvoidAuth, getRegister)
AuthRoute.get('/verify',verifyemail);
AuthRoute.get('/login', AvoidAuth, getLogin)
AuthRoute.get('/reset-password', GenrateTempToken)
AuthRoute.post('/reset-password/:id/:token', ResetPassword)
AuthRoute.post('/logout', logout)


//export route
module.exports = AuthRoute