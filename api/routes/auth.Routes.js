const express = require('express');
const { getRegister , getLogin} = require('../controllers/auth.Controllers');
const AuthRouter = express.Router();
const {AvoidAuth } = require ('../middlewares/avoidAuth')


//Authentication

AuthRouter.post('/auth/register', AvoidAuth ,getRegister)
AuthRouter.get('/auth/login',AvoidAuth , getLogin)


module.exports = AuthRouter