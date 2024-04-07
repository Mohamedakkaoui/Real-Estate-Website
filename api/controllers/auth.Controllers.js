//import necessary functions 
const UserSchema = require('../models/schemas/user.Model.js');
const { HashPassword,VerifyPassword} = require('../helpers/hashing.js');
const EmailService = require('../Utils/Emails.js');
const emailService = new EmailService(); 
const { mailsender } = require('../middlewares/nodemailer.js')
const { HashPassword, VerifyPassword } = require('../helpers/hashing.js');
const { generateToken , verifyToken } = require('../helpers/jwt');
const { GetUserbyIdDB, updateProfileDB , checkExitingMail } = require('../models/methods/user.Methods.js')
const {v4: uuid} = require('uuid')


//register new user
exports.getRegister = async (req, res) => {
    try {
        const { FirstName, LastName, Username, Email, Password, PhoneNumber } = req.body;
        const hashedPassword = await HashPassword(Password)
        const verifyEmail = await checkExitingMail(Email)
        if (verifyEmail) {
            return res.status(400).json({ message: "email already used" })
        }

        // const OwnerId = uuid()
        const newUser = new UserSchema({ FirstName, LastName, Username, Email, Password: hashedPassword, PhoneNumber });
        const verificationToken = emailService.generateVerificationToken();
        // await verifyemail(req, res);
        const verificationLink = `http://localhost:3500/users/auth/verify?email=${encodeURIComponent(Email)}&token=${verificationToken}`;
        newUser.verificationToken = verificationToken;
        // OwnerId : OwnerId
        emailService.sendVerificationEmail(Email, verificationLink);
        const result = await newUser.save()


        // mailsender(req.body.Email,'welcomingEmail', LastName)
        return res.status(201).send({ message: 'signing up successfully', result: result })
    } catch (err) {
        return res.status(404).send('Unable to Register user : ' + err)
    }
}

// login user
exports.getLogin = async (req, res) => {
    try {
        const { Email, Password } = req.body
        const user = await UserSchema.findOne({ Email })
        if (!user) {
            return res.status(400).json({ message: "User not found" })
        }
        const checked = await VerifyPassword(Password, user.Password)
        if (!checked) return res.status(400).json({ message: "Incorrect Password" })
        const token = generateToken({ Email: user.Email, FirstName: user.FirstName, LastName: user.LastName, id: user._id }, '10h')
        res.status(200).json({ message: "Login successful", token: token });

    } catch (err) {
        return res.status(501).send('Unsuccessful attempt to login :' + err)
    }
}
//Generate temporary token
exports.GenrateTempToken = async (req, res) => {
    try {
        const { Email } = req.body
        const user = await checkExitingMail(Email)
        if (!user) {
           return res.status(400).json({ message: "User not found" })
        }
        const id = user._id
        const token = generateToken({ id , Username: user.Username }, '15m')
        mailsender(req.body.Email,'resetPasswordEmail', id , token)
        return res.status(200).send('Password reset Link sent to ur Email')
    } catch (error) {
      return res.status(500).json({ message : 'Internal server error', error : error.message})
    }
}




//Reset password
exports.ResetPassword = async (req, res) => {
    try {
        const { id , token } = req.params
        const user = await GetUserbyIdDB(id)
        if (!user) {
           return res.status(400).json({ message: "User not found" })
        }
        const verify = await verifyToken(token)
        if (!verify) {
            return res.status(404).send('token ivalid')
        }
        const { password , ConfirmPassword} = req.body
        if (password !== ConfirmPassword) {
            return res.status(400).json({message : 'Password is not Matched'})
        }
        const hashedpassword = await HashPassword(password)
        await updateProfileDB (id , {Password : hashedpassword}, {new : true})
        return res.status(202).json({message : 'password reset successfuly!'})
    } catch (error) {
        return res.status(500).json({message : 'Unable to reset password due to :' , Error : error.message} )
    }
}


exports.logout = async (req, res) => {
    try {
        res.clearCookie('token')
        
        res.status(200).json({ message: "Logout successful" })
    } catch (err) {
        return res.status(500).send('Error logging out: ' + err)
    }
}
