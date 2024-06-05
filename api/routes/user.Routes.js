//initiating express
const express = require("express");
const UserRoute = express.Router();

//importing controllers & Middlewares

const {
  updateUserProfile,
  getUserById,
  DeleteUser,
  getAllUsers,
  updateUserPassword,
  DeleteCurrentUser,
  GetUserByUsername,
  updateProfilePic,
  getMyProfile,
} = require("../controllers/user.Controllers.js");
const {
  profilePicUpload,
  ListingPicsUpload,
} = require("../middlewares/multer.js");

const { isAuthenticated } = require("../middlewares/authMiddlewares");
const ROLES_LIST = require("../config/Roles_Lists.js");
const verifyRoles = require("../middlewares/roles.js");

const { ValidateID } = require("../middlewares/ValidateID .js");

const { uploadSingle, uploadMultiple } = require("../helpers/uploadhelper.js");
const { getAllFavorite } = require("../controllers/listing.Controllers.js");

//defining routes

UserRoute.get("/favorite", isAuthenticated, getAllFavorite);

UserRoute.route("/profile")
  .put(isAuthenticated, updateUserProfile)
  .get(isAuthenticated, getUserById);
UserRoute.get("/Myprofile", isAuthenticated, getMyProfile);
UserRoute.get("/", isAuthenticated, getAllUsers);
UserRoute.get("/:id", ValidateID, getUserById);
UserRoute.put("/profile/change-password", isAuthenticated, updateUserPassword);
UserRoute.put(
  "/profile/add-pic",
  isAuthenticated,
  verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Guest, ROLES_LIST.User),
  profilePicUpload.single("profilePic"),
  updateProfilePic
);
UserRoute.delete(
  "/profile/delete",
  isAuthenticated,
  verifyRoles(ROLES_LIST.Guest, ROLES_LIST.Admin, ROLES_LIST.User),
  DeleteCurrentUser
);
// UserRoute.get('/profile/:username', verifyRoles(ROLES_LIST.Admin),GetUserByUsername)
UserRoute.post(
  "/pic",
  isAuthenticated,
  profilePicUpload.single("profilePic"),
  uploadSingle
);
UserRoute.delete("/deletUser/:id", DeleteUser);

// exporting the route
module.exports = UserRoute;
