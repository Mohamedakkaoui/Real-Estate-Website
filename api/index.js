//packs
const express = require('express')
const server = express()
require('dotenv').config()
const { default: mongoose } = require('mongoose');


//necessary functions import



//use of packs
server.use(express.json())
server.use(express.urlencoded({ extended: true }))


//importing routes
const AuthRoute = require('./routes/auth.Routes')
const UserRoute = require('./routes/user.Routes')
const ReviewRoute = require('./routes/Review.Routes')
const LinstingRoute=require('./routes/listing.Routes')

//using routes
server.use('/users/auth', AuthRoute)
server.use('/users', UserRoute)
server.use('/reviews', ReviewRoute)
server.use('/proprety',LinstingRoute);



// Import the database connection function and execute it
const { connection } = require('./config/database');
const database = connection();

// Connect to the MongoDB database
database.connectToMongo();


//listening on chosen port
const port = process.env.PORT;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})