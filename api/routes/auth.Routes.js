const express = require('express');
const { getRegister,getLogin} = require('../controllers/auth.Controllers');
const AuthRoute = express.Router();
const { AvoidAuth } = require('../middlewares/avoidAuth')
const {verifyemail} = require('../controllers/verifyEmail.Controllor');

//Authentication
AuthRoute.post('/register', AvoidAuth, getRegister)

// Endpoint pour la vérification d'email
AuthRoute.get('/verify',verifyemail);

AuthRoute.get('/login', AvoidAuth, getLogin)
// AuthRoute.get('/reset-password', GenrateTempToken)
// AuthRoute.post('/reset-password/:id/:token', ResetPassword)
// AuthRoute.post('/logout', logout)

//export route
module.exports = AuthRoute