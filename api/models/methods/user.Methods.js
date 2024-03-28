const UserSchema = require('../schemas/user.Model')
const mongoose = require('mongoose')

exports.checkExitingMail = async (email) => {
  try {
      const user = await UserSchema.findOne({ Email : email })
      return user
  }
  catch (error) {
      throw new Error(error)
  }
}

exports.getAllUsersDB = async () => {
  try {
    const users = await UserSchema.find();
    return users
  } catch (error) {
    throw new Error('Failed to fetch users from the database');
  }
};
//get user b Id methode
exports.getUsersBId = async (id) => {
  try {
    const user = await UserSchema.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error('error');
  }
};


exports.DeleteUserDB = async (id) => {
  try {
    if (mongoose.Types.ObjectId.isValid(id))
    {
      const deltedUser = await UserSchema.deleteOne({_id : id})
      return deltedUser
    }
  } catch (error) {
    console.log(error)
  }
}
