//importing necessary methods and functions
const { DeleteUserDB, getAllUsersDB, GetUserbyIdDB, updateProfileDB, GetMyProfile, GetUserbyIdallInfoDB  } = require('../models/methods/user.Methods.js')
const { HashPassword, VerifyPassword } = require('../helpers/hashing.js')
const jwt = require('jsonwebtoken');
const { bufferAndUpload } = require('../helpers/datauri.js');

//all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsersDB()
    if (!users) {
      return res.status(404).json({ message: "No users found" })
    }
    return res.status(200).json(users)
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", Error: error.message })
  }
}

//get user by id
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params
    const user = await GetUserbyIdDB(id)
    if (!user) {
      return res.status(404).json({ Message: "User not found" })
    }
    return res.status(200).json({ Message: "User found succesfully", User: user })
  } catch (error) {
    return res.status(500).json({ Message: "Internal server error", Error: error.message })
  }
}

//Update User Info
exports.updateUserProfile = async (req, res) => {
  try {
    const { id } = req.user
    if (!id) {
      return res.status(404).json({ Message: 'No user identified!' })
    }
    const data = req.body
    if (!data) {
      return res.status(404).json({ Message: 'No data provided' })
    }
    var { FirstName, LastName, Username, Email, PhoneNumber } = data
    const user = await GetUserbyIdDB(id)
    if (!user) {
      return res.status(404).json({ Message: 'no user found' })
    }
    const updatedUser = await updateProfileDB(id, { FirstName, LastName, Username, Email, PhoneNumber }, { new: true })
    console.log(updatedUser);
    return res.status(202).json({ Message: 'user updated successfully', User : updatedUser})
  }
  catch (error) {
    return res.status(500).json({ Message: "User couldnt be updated", Error: error.message })
  }
}


//Change Password
exports.updateUserPassword = async (req, res) => {
  try {
    const { id } = req.user
    if (!id) {
      return res.status(400).json({ Message: 'no user identified!' })
    }
    const { Password } = req.body
    const newPassword = Password
    if (!newPassword || newPassword === '') {
      return res.status(400).json({ Message: 'no password sent!' })
    }
    const user = await GetUserbyIdallInfoDB (id)
    const matchedPassword = await VerifyPassword( newPassword, user.Password)
    if (matchedPassword) {
      return res.status(400).json({ Message: 'you used the same old password, please provide a new password!' })
    }
    else {
      let Password = await HashPassword( newPassword)
      await updateProfileDB(id,  {Password }, { new: true })
      return res.status(202).json({ Message: 'password modified successfuly!' })
    }
  }
  catch (error) {
    return res.status(500).json({ Message: "Internal server error", Error: error.message })
  }
}

//Delete user
exports.DeleteUser = async (req, res) => {
  try {
    const { id } = req.user
    const deleteUser = await DeleteUserDB(id)
    if (deleteUser.deletedCount == 0) {
      return res.status(404).send('User Not Found')
    }
    return res.status(202).send('deleted Succesfully')
  } catch (error) {
    return res.status(500).json({ message: "Error While deleting User", Error: error.message })
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
    const uploadedImage = await bufferAndUpload(localImage)
    const updatedUser = await updateProfileDB(id, { ProfilePic: uploadedImage }, { new: true })
    return res.status(202).json({ message: 'image added successfully' })
  }
  catch (error) {
    return res.status(500).json({ message: "Error updating Profile Picture", Error: error.message })
  }
}


//get user by id
exports.getMyProfile = async (req, res) => {
  try {
    const { id } = req.user
    const user = await GetMyProfile(id)
    if (!user) {
      return res.status(404).json({ Message: "User not found" })
    }
    return res.status(200).json(user)
  } catch (error) {
    return res.status(500).json({ Message: "Internal server error", Error: error.message })
  }
}