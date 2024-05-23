//import necessary functions
const UserSchema = require("../models/schemas/user.Model.js");
const { HashPassword, VerifyPassword } = require("../helpers/hashing.js");
const EmailService = require("../Utils/Emails.js");
const emailService = new EmailService();
const { mailsender } = require("../middlewares/nodemailer.js");
const { generateToken, verifyToken } = require("../helpers/jwt");
const {
  GetUserbyIdDB,
  updateProfileDB,
  checkExitingMail,
} = require("../models/methods/user.Methods.js");
const { v4: uuid } = require("uuid");
const { sendWelcomeSMS } = require("../helpers/sendsms.js");
const { sendVerificationCode } = require("../middlewares/VerifNumber.js");

//register new user
exports.getRegister = async (req, res) => {
  try {
    const { FirstName, LastName, Username, Email, Password, PhoneNumber } =
      req.body;
    const hashedPassword = await HashPassword(Password);
    const verifyEmail = await checkExitingMail(Email);
    if (verifyEmail) {
      return res.status(400).json({ Message: "Email already used" });
    }

    const OwnerId = uuid();
    const newUser = new UserSchema({
      FirstName,
      LastName,
      Username,
      Email,
      Password: hashedPassword,
      PhoneNumber,
      OwnerId: OwnerId,
    });
    const verificationToken = emailService.generateVerificationToken();
    const verificationLink = `http://localhost:5173/users/auth/verify?email=${encodeURIComponent(
      Email
    )}&token=${verificationToken}`;
    newUser.verificationToken = verificationToken;
    emailService.sendVerificationEmail(Email, verificationLink);
    const result = await newUser.save();

    mailsender(req.body.Email, "welcomingEmail", LastName);
    // const verificationCode = await sendVerificationCode(PhoneNumber);
    // if (!verificationCode) {
    //   return res
    //     .status(500)
    //     .json({ success: false, message: "Failed to send verification code" });
    // }
    // const smsSent = await sendWelcomeSMS(PhoneNumber);
    // if (!smsSent) {
    //   return res
    //     .status(500)
    //     .json({ success: false, message: "Failed to send welcome SMS" });
    // }
    return res
      .status(201)
      .json({ Message: "signing up successfully", result: result });
  } catch (err) {
    return res
      .status(404)
      .json({
        Message: `Unable to Register user : ${err.message}`,
        Error: err.message,
      });
  }
};

// login user
exports.getLogin = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const userDB = await UserSchema.findOne({ Email });
    if (!userDB) {
      return res.status(400).json({ Message: "User not found" });
    }
    const checked = await VerifyPassword(Password, userDB.Password);
    if (!checked)
      return res.status(400).json({ Message: "Incorrect Password" });
    const token = generateToken(
      {
        Email: userDB.Email,
        FirstName: userDB.FirstName,
        LastName: userDB.LastName,
        id: userDB._id,
        Role: userDB.Role,
      },
      "10h"
    );
    const user = {
      Email: userDB.Email,
      FirstName: userDB.FirstName,
      LastName: userDB.LastName,
      Role: userDB.Role,
      isActive: userDB.isActive,
    };
    res
      .status(200)
      .json({ Message: "Login successful", token: token, User: user });
  } catch (err) {
    return res
      .status(501)
      .json({ Message: "Unsuccessful attempt to login :", Error: err.message });
  }
};

//Generate temporary token
exports.GenrateTempToken = async (req, res) => {
  try {
    const { Email } = req.body;
    const user = await checkExitingMail(Email);
    if (!user) {
      return res.status(400).json({ Message: "User not found" });
    }
    const id = user._id;
    const token = generateToken({ id, Username: user.Username }, "15m");
    mailsender(req.body.Email, "resetPasswordEmail", id, token);
    return res
      .status(200)
      .json({ Message: "Password reset Link sent to ur Email" });
  } catch (error) {
    return res.status(500).json({ Error: error.message });
  }
};

//Reset password
exports.ResetPassword = async (req, res) => {
  try {
    const { id, token } = req.params;
    const user = await GetUserbyIdDB(id);
    if (!user) {
      return res.status(400).json({ Message: "User not found" });
    }
    const verify = await verifyToken(token);
    if (!verify) {
      return res.status(404).json({ Message: "token ivalid" });
    }
    const { Password, ConfirmPassword } = req.body;
    console.log(Password, ConfirmPassword);
    if (Password !== ConfirmPassword) {
      return res.status(400).json({ Message: "Password is not Matched" });
    }
    const hashedpassword = await HashPassword(Password);
    await updateProfileDB(id, { Password: hashedpassword }, { new: true });
    return res
      .status(202)
      .json({ Status: "Success", Message: "password reset successfuly!" });
  } catch (error) {
    return res.status(500).json({
      Status: "Failed",
      Message: "Unable to reset password due to :",
      Error: error.message,
    });
  }
};

//needs modification the otken isnt delete it at all
exports.logout = async (req, res) => {
  if (req.headers && req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res
        .status(400)
        .json({ success: false, Message: "Authorization failed" });
    }
    try {
      const decodedToken = await verifyToken(token);

      await UserSchema.findByIdAndUpdate(decodedToken.id, { isActive: false });

      return res
        .status(200)
        .json({ Success: true, Message: "Logged out successfully" });
    } catch (error) {
      return res
        .status(401)
        .json({ Success: false, Message: "Unauthorized: Invalid token" });
    }
  } else {
    return res
      .status(400)
      .json({ Success: false, Message: "Authorization header missing" });
  }
};
