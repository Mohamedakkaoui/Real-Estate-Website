const express = require("express");
const {
  getRegister,
  getLogin,
  GenrateTempToken,
  ResetPassword,
  logout,
} = require("../controllers/auth.Controllers");
const { verifyemail } = require("../controllers/verifyEmail.Controllor");
const AuthRoute = express.Router();
const { AvoidAuth } = require("../middlewares/avoidAuth");
const { validateUser } = require("../middlewares/validate/validateUser");
const { verifyVerificationCode } = require("../middlewares/VerifNumber");

//Authentication
AuthRoute.post("/register", AvoidAuth, validateUser, getRegister);
AuthRoute.post("/verify", verifyVerificationCode);
AuthRoute.get("/verify", verifyemail);
AuthRoute.post("/login", AvoidAuth, getLogin);
AuthRoute.post("/reset-password-email", GenrateTempToken);
AuthRoute.post("/password-reset/:id/:token", ResetPassword);
AuthRoute.post("/logout", logout);

//export route
module.exports = AuthRoute;
