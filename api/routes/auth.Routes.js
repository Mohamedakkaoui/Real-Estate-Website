//import midllewares and packs
const express = require('express');
const { getRegister, getLogin, ResetPassword ,  GenrateTempToken, logout} = require('../controllers/auth.Controllers');
const AuthRoute = express.Router();
const { AvoidAuth } = require('../middlewares/avoidAuth')
const {validateUser} = require('../middlewares/validate/validateUser');
const {verifyVerificationCode } = require('../middlewares/VerifNumber');

//Authentication

AuthRoute.post('/register', AvoidAuth,validateUser,getRegister)
AuthRoute.post('/verify', verifyVerificationCode);
AuthRoute.get('/login', AvoidAuth, getLogin)
AuthRoute.get('/reset-password', GenrateTempToken)
AuthRoute.post('/reset-password/:id/:token', ResetPassword)
AuthRoute.post('/logout', logout)

//export route
module.exports = AuthRoute