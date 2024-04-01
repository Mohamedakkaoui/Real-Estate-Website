//initiating express
const express = require('express')
const LinstingRoute = express.Router()

//importing controllers & Middlewares
const { getLinstings }=require('../controllers/listing.Controllers');


//defining routes

LinstingRoute.get('/',getLinstings)
 
// exporting the route
module.exports = LinstingRoute