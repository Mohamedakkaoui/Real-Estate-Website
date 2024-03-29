//import schema & mongoose
const UserSchema = require('../schemas/user.Model')
const mongoose = require('mongoose')


// method to verify if an Email is already used
exports.checkExitingMail = async (email) => {
  try {
    const user = await UserSchema.findOne({ Email: email })
    return user
  }
  catch (error) {
    throw new Error('Email not found : ' + error)
  }
}


// get all users
exports.getAllUsersDB = async () => {
  try {
    const users = await UserSchema.find()
    return users
  } catch (error) {
    throw new Error('Failed to fetch users from the database : ' + error)
  }
};


//method to get user by Id 
exports.GetUserbyIdDB = async (id) => {
  try {
    if (mongoose.Types.ObjectId.isValid(id)) {
    const user = await UserSchema.findById({ _id: id })
    return user
    }
  } catch (error) {
    throw new Error('Couldnt Find User : ' + error);
  }
}

//method to delete user
exports.DeleteUserDB = async (id) => {
  try {
    if (mongoose.Types.ObjectId.isValid(id)) {
      const deltedUser = await UserSchema.deleteOne({ _id: id })
      return deltedUser
    }
  } catch (error) {
    throw new Error('Failed to delete user : ' + error)
  }
}

//find user and update
exports.updateProfileDB = async (id, data) => {
  try {
    if (mongoose.Types.ObjectId.isValid(id)) {
    const user = await UserSchema.findByIdAndUpdate(id, data, { new: true })
    return user
    }
  }
  catch (error) {
    throw new Error("Failed to update User'Profile : " + error)
  }
}


//fid user by username
exports.GetuserByUsernameDB = async (Username) => {
  try {
    const user = await UserSchema.findOne({Username})
    return user
  } catch (error) {
    throw new error ('No user was Found : ' + error)
  }
}
