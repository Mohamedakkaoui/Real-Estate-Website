// controllers/listingController.js
const { saveListingForUser } = require('../models/methods/user.Methods');

exports.saveListingUser = async (req, res) => {
    try {
        const userId = req.user.id;
        const listingId = req.params.listingId
      
        const user = await saveListingForUser(userId, listingId);
        return res.status(201).send(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};
