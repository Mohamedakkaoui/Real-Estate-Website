const express = require('express');
const { getRegister , getLogin} = require('../controllers/auth.Controllers');
const AuthRouter = express.Router();


//Authentication

AuthRouter.post('/auth/register', getRegister)
AuthRouter.get('/auth/login', getLogin)


module.exports = AuthRouter