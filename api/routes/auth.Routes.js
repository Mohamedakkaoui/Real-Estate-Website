//import midllewares and packs
const express = require('express');
const { getRegister, getLogin } = require('../controllers/auth.Controllers');
const AuthRoute = express.Router();
const { AvoidAuth } = require('../middlewares/avoidAuth')


//Authentication

AuthRoute.post('/auth/register', AvoidAuth, getRegister)
AuthRoute.get('/auth/login', AvoidAuth, getLogin)

//export route
module.exports = AuthRoute