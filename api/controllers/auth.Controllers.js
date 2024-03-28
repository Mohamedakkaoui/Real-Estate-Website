//import necessary functions 
const UserSchema = require('../models/schemas/user.Model.js');
const { mailsender } = require('../middlewares/nodemailer.js')
const { HashPassword } = require('../helpers/hashing.js');
const { generateToken } = require('../helpers/jwt');
const { VerifyPassword } = require("../helpers/hashing.js");
const { checkExitingMail } = require('../models/methods/user.Methods.js')



//register new user
exports.getRegister = async (req, res) => {
    try {
        const { FirstName, LastName, Username, Email, Password, PhoneNumber } = req.body;
        const hashedPassword = await HashPassword(Password)
        const verifyEmail = await checkExitingMail(Email)
        if (verifyEmail) {
            return res.status(400).json({ message: "email already used" })
        }
        const newUser = new UserSchema({ FirstName, LastName, Username, Email, Password: hashedPassword, PhoneNumber })
        const result = await newUser.save()
        // mailsender(req.body.Email, LastName)
        return res.status(201).send({ message: 'signing up successfully', result: result })
    } catch (err) {
        return res.status(404).send(err)
    }
}



// login user
exports.getLogin = async (req, res) => {
    try {
        const { Email, Password } = req.body;
        const user = await UserSchema.findOne({ Email: Email });
        if (!user) {
            return res.status(400).json({ message: "User not founds" })
        }
        const checked = await VerifyPassword(Password, user.Password)
        if (!checked) return res.status(400).json({ message: "Incorrect Password" })
        const userObject = user.toObject();
        const token = generateToken({ Email: userObject.Email, FirstName: userObject.FirstName, LastName: userObject.LastName, id: userObject._id });
        res.status(200).json({ message: "Login successful", token: token, key: process.env.jwtKey });

    } catch (err) {
        console.error(err);
        return res.status(501).send('server error')
    }
}