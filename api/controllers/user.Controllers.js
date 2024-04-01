//importing necessary methods and functions
const { DeleteUserDB, getAllUsersDB, GetUserbyIdDB, updateProfileDB } = require('../models/methods/user.Methods.js')
const { HashPassword, VerifyPassword } = require('../helpers/hashing.js')
const jwt = require('jsonwebtoken');
const { bufferAndUpload } = require('../helpers/datauri.js');

//all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsersDB();
    res.status(200).json(users);
  } catch (error) {
    console.log(error)
  }
};

//get user by id
exports.getUserById = async (req, res) => {
  try {
    const id = req.user.id;
    const user = await getUsersBId(id);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


//Update User Info
exports.updateUserProfile = async (req, res) => {
  try {
    const { id } = req.user

    if (!id) {
      return res.status(404).json({ message: 'no user identified!' })
    }
    const data = req.body
    if (!data) {
      return res.status(404).json({ message: 'no data provided' });
    }
    var { FirstName, LastName, Username, Email, PhoneNumber } = data

    const user = await findUser(id)
    if (!user) {
      return res.status(404).json({ message: 'no user found' });
    }
    const updatedUser = await updateProfileDB(id, { FirstName, LastName, Username, Email, PhoneNumber }, { new: true })
    return res.status(202).json({ message: 'user updated successfully' })
  }
  catch (error) {
    console.log(error.message)
  }
}


//Change Password
exports.updateUserPassword = async (req, res) => {
  try {
    const { id } = req.user
    if (!id) {
      return res.status(400).json({ message: 'no user identified!' })
    }
    const { newPassword } = req.body
    if (!newPassword || newPassword === '') {
      return res.status(400).json({ message: 'no password sent!' })
    }
    const user = await findUser(id)
    const matchedPassword = await VerifyPassword(newPassword, user.Password);
    if (matchedPassword) {
      return res.status(400).json({ message: 'you used the same old password, please provide a new password!' })
    }
    else {
      let Password = await HashPassword(newPassword)
      await updateProfile(id, { Password }, { new: true })
      return res.status(202).json({ message: 'password modified successfuly!' })
    }
  }
  catch (error) {
    console.log(error.message)
  }
}

//Delete user
exports.DeleteUser = async (req, res) => {
  try {
    const id = req.user.id
    const deleteUser = await DeleteUserDB(id)
    if (deleteUser.deletedCount == 0) {
      return res.status(404).send('User Not Found')
    }
    return res.status(202).send('deleted Succesfully')
  } catch (error) {
    console.log(error)
  }
}

//add profile Pic
exports.updateProfilePic = async (req, res) => {
  try {

    const { id } = req.user
    if (!id) {
      return res.status(404).json({ message: 'no user identified!' })
    }
    const user = await GetUserbyIdDB(id)
    if (!user) {
      return res.status(404).json({ message: 'no user found' });
    }
    const localImage = req.file
    if (!localImage) {
      return res.status(404).json({ message: 'no image provided' });
    }
    console.log(localImage)
    const uploadedImage = await bufferAndUpload(localImage)
    const updatedUser = await updateProfileDB(id, { ProfilePic: uploadedImage }, { new: true })
    return res.status(202).json({ message: 'image added successfully' })
  }
  catch (error) {
    console.log(error.message)
  }
}











