//import used functions
const { verifyToken } = require("../helpers/jwt")


//defining Auuthentification check middleware
exports.isAuthenticated = async (req, res, next) => {
    try {
        const { token } = req.cookies
        if (!token) {
            return res.status(401).json({ Message: 'Unauthorized: Token missing' })
        }
        const verify = await verifyToken(token)
        if (!verify) {
            return res.status(401).json({ Message: 'Unauthorized: Invalid token' })
        }
        req.user = verify
        next()
    } catch (err) {
        return res.status(500).json({ Message: 'Internal Server Error', Error : err.message})
    }
}