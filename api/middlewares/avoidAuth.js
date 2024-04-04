const {verifyToken} = require('../helpers/jwt')
require('dotenv').config()


exports.AvoidAuth = (req, res, next) => {
  try {
    const BearerHeader = req.headers['authorization']
    if(!BearerHeader)
    {
      return next()
    }
    const token = BearerHeader.split(' ')[1]
    const test = verifyToken(token, process.env.JWTKEY)
    if (!test)
    {
      return next()
    }
    return res.status(302).send('home')
  } catch (error) {
    return res.status(401).send('unauthenticated')
  }
}