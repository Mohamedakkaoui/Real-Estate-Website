const express = require('express');
const { getRegister } = require('../controllers/auth.Controllers');
const router = express.Router();


//Authentication

router.post('/auth/register', getRegister)


module.exports = router