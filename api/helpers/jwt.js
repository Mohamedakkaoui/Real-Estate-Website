//import jsonwebtoken & dotenv
const jwt = require('jsonwebtoken')
require('dotenv').config()

//Token functions
exports.generateToken = (data) => {
    return jwt.sign(data, process.env.jwtKey, { expiresIn: '10h' })
}

exports.verifyToken = (token) => {
    return jwt.verify(token, process.env.jwtKey)
}
