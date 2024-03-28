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
    throw new Error(error)
  }
}


// get all users
exports.getAllUsersDB = async () => {
  try {
    const users = await UserSchema.find();
    return users
  } catch (error) {
    throw new Error('Failed to fetch users from the database');
  }
};


//method to get user by Id 
exports.getUsersBId = async (id) => {
  try {
    const user = await UserSchema.findById({ _id: id });
    return user;
  } catch (error) {
    console.log(error);
    throw new Error('error');
  }
};

//method to delete user
exports.DeleteUserDB = async (id) => {
  try {
    if (mongoose.Types.ObjectId.isValid(id)) {
      const deltedUser = await UserSchema.deleteOne({ _id: id })
      return deltedUser
    }
  } catch (error) {
    console.log(error)
  }
}

//find user 
exports.findUser = async (id) => {
  try {
    const user = await UserSchema.findOne({ _id: id })
    return user
  }
  catch (error) {
    throw new Error(error)
  }
}

//find user and update
exports.updateProfile = async (id, data) => {
  try {
    const user = await UserSchema.findByIdAndUpdate(id, data, { new: true })
    return user
  }
  catch (error) {
    throw new Error(error)
  }
}



