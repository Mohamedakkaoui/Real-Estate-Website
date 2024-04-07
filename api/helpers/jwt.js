//import jsonwebtoken & dotenv
const jwt = require('jsonwebtoken')
require('dotenv').config()

//Token functions
exports.generateToken = (data, expirationDate) => {
    return jwt.sign(data, process.env.jwtKey, { expiresIn: expirationDate })
}

exports.verifyToken = (token) => {
    return jwt.verify(token, process.env.jwtKey)

}


