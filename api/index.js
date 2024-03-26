//packs
const express = require('express')
const server = express()
require('dotenv').config()
const { default: mongoose } = require('mongoose');


//functions import



//use of packs
server.use(express.json())
server.use(express.urlencoded({ extended: true }))


//importing routes

const UsersRoute = require('./controllers/user.Controllers')
app.use('/users', UsersRoute)
const AuthRoutes = require('./routes/auth.Routes')

//using routes
server.use('/', AuthRoutes)




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