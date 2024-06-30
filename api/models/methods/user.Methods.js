const UserSchema = require("../schemas/user.Model");
const ListingsSchema = require("../schemas/listing.Model");

const mongoose = require("mongoose");

// method to verify if an Email is already used
exports.checkExitingMail = async (email) => {
  try {
    const user = await UserSchema.findOne({ Email: email });
    return user;
  } catch (error) {
    throw new Error("Email not found : " + error);
  }
};

//save listing for users
exports.saveListingForUser = async (userId, listingId) => {
  try {
    const user = await UserSchema.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    if (!user.watchList) {
      user.watchList = [];
    }

    const listing = await ListingsSchema.findOne({ Object_id: listingId });
    if (!listing) {
      return { error: "Listing not found in the database" };
    }

    if (user.watchList.includes(listingId)) {
      return { error: "Item already registered in the watchlist!" };
    }

    user.watchList.push(listingId);
    console.log("Updated watchList after adding:", user.watchList);

    await user.save();
    return user;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to save listing: " + error.message);
  }
};

//Delete saved listing from the user watchlist
exports.DeleteSavedListingForUser = async (userId, ListingID) => {
  try {
    const user = await UserSchema.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    if (!user.watchList) {
      return;
    }
    const listing = await ListingsSchema.findOne({ Object_id: ListingID });
    if (!listing) {
      return { error: "Listing not found in the database" };
    }
    console.log(user.watchList);
    if (user.watchList.includes(ListingID)) {
      const index = user.watchList.indexOf(ListingID);
      const darft = user.watchList.splice(index, 1);
      await user.save();
      console.log(user.watchList);
      return user;
    } else {
      return user;
    }
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to Unsave listing: " + error.message);
  }
};

// get all users
exports.getAllUsersDB = async () => {
  try {
    const users = await UserSchema.find().select(
      "FirstName Role LastName Username Email PhoneNumber OwnerId ProfilePic isActive -_id"
    );
    return users;
  } catch (error) {
    throw new Error("Failed to fetch users from the database : " + error);
  }
};

//method to get user by Id
exports.GetUserbyIdallInfoDB = async (id) => {
  try {
    const user = await UserSchema.findById({ _id: id });
    return user;
  } catch (error) {
    throw new Error("Couldnt Find User : " + error);
  }
};
//method to get user by Id
exports.GetUserbyIdDB = async (id) => {
  try {
    const user = await UserSchema.findById({ _id: id }).select(
      "FirstName LastName watchList Username Email ProfilePic Role PhoneNumber -_id"
    );
    return user;
  } catch (error) {
    throw new Error("Couldnt Find User : " + error);
  }
};

//method to delete user profile
exports.DeleteUserDB = async (id) => {
  try {
    if (mongoose.Types.ObjectId.isValid(id)) {
      const deltedUser = await UserSchema.deleteOne({ _id: id });
      return deltedUser;
    }
  } catch (error) {
    throw new Error("Failed to delete user : " + error);
  }
};

//methode to delete user byID
exports.DeleteUserByOwnerIdDB = async (id) => {
  try {
    const deleteUser = await UserSchema.findOneAndDelete({ OwnerId: id });
    return deleteUser;
  } catch (error) {
    throw new Error("Failed to delete user : " + error);
  }
};

//find user and update
exports.updateProfileDB = async (id, data) => {
  try {
    if (mongoose.Types.ObjectId.isValid(id)) {
      const user = await UserSchema.findByIdAndUpdate(id, data, { new: true });
      return user;
    }
  } catch (error) {
    throw new Error("Failed to update User'Profile : " + error);
  }
};

//fid user by username
exports.GetuserByUsernameDB = async (Username) => {
  try {
    const user = await UserSchema.findOne({ Username });
    return user;
  } catch (error) {
    throw new error("No user was Found : " + error);
  }
};

//method to get user by Id
exports.GetMyProfile = async (id) => {
  try {
    const user = await UserSchema.findById({ _id: id }).select(
      "FirstName LastName Username Email PhoneNumber ProfilePic -_id"
    );
    return user;
  } catch (error) {
    throw new Error("Couldnt Find User : " + error);
  }
};
