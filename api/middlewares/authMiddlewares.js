//import used functions
const { verifyToken } = require("../helpers/jwt");


//defining Auuthentification check middleware
exports.isAuthenticated = async (req, res, next) => {
    try {
        const bearerHeader = req.headers['authorization'];

        if (!bearerHeader) {
            return res.status(401).json({ message: 'Unauthorized: Token missing' });
        }
        const token = bearerHeader.split(' ')[1];
        console.log(token)
        const verify = await verifyToken(token); // Await here
        if (!verify) {
            return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }

        req.user = verify;
        console.log(req.user)
        next();
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
