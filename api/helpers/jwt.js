const jwt = require('jsonwebtoken');

exports.generateToken = (data)=>{
    return jwt.sign(data, process.env.jwtKey, {expiresIn: '10h'})
}

exports.verifyToken = (token)=>{
    return jwt.verify(token, process.env.jwtKey)
}
