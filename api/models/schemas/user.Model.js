const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  FirstName: {
    type: String,
    // required: true
  },
  LastName: {
    type: String,
    // required: true
  },
  Username: {
    type: String,
    required: true,
    unique: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
  PhoneNumber: {
    // required: true,
    type: Number,
  },
  Role: {
    type: String,
    default: "guest",
  },
  ProfilePic: {
    type: Object,
  },
  Listings: [String],
  Bookings: [String],
  isActive: {
    type: Boolean,
    default: true,
  },
  OwnerId: {
    type: String,
    unique: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
  },
  watchList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Listing'
    },
  ],
  Notifications: [
    {
      listingID: { type: mongoose.Schema.Types.ObjectId, ref: "Listing" },
      operationType: { type: String },
    },
  ],
})

module.exports = mongoose.model("Users", UserSchema);
