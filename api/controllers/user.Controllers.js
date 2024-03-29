//importing necessary methods and functions
const { DeleteUserDB, getAllUsersDB, GetUserbyIdDB, updateProfileDB, GetuserByUsernameDB } = require('../models/methods/user.Methods.js')
const { HashPassword, VerifyPassword } = require('../helpers/hashing.js')
const jwt = require('jsonwebtoken')

//all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsersDB()
    if (!users){
      res.status(404).json({message : 'Couldnt find any Users'})
    }
    res.status(200).json(users)
  } catch (error) {
    throw new error ('Failed to get Users')
  }
}

//get user by id
exports.getUserById = async (req, res) => {
  try {
    const id = req.user.id
    if (!id) {
      return res.status(404).json({message : "Provide a valid ID!"})
    }
    const user = await GetUserbyIdDB(id)
    if (!user){
      return res.status(404).json({message : "no user identified"})
    }
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' })
  }
}


//Update User Info
exports.updateUserProfile = async (req, res) => {
  try {
    const { id } = req.user

    if (!id) {
      return res.status(404).json({ message: 'no user identified!' })
    }
    const data = req.body
    if (!data) {
      return res.status(404).json({ message: 'no data provided' })
    }
    var { FirstName, LastName, Username, Email, PhoneNumber } = data

    const user = await GetUserbyIdDB(id)
    if (!user) {
      return res.status(404).json({ message: 'no user found' })
    }
    const updatedUser = await updateProfileDB(id, { FirstName, LastName, Username, Email, PhoneNumber }, { new: true })
    return res.status(202).json({ message: 'user updated successfully' })
  }
  catch (error) {
    throw new error ("unable to update user's Data")
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
    const user = await GetUserbyIdDB(id)
    const matchedPassword = await VerifyPassword(newPassword, user.Password);
    if (matchedPassword) {
      return res.status(400).json({ message: 'you used the same old password, please provide a new password!' })
    }
    else {
      let Password = await HashPassword(newPassword)
      await updateProfileDB(id, { Password }, { new: true })
      return res.status(202).json({ message: 'password modified successfuly!' })
    }
  }
  catch (error) {
    throw new error('unable to update password')
  }
}

//Delete user
exports.DeleteUser = async (req, res) => {
  try {
    const id = req.user.id
    if (!id) {
      return res.status(400).json({ message: 'no user identified!' })
    }
    const deleteUser = await DeleteUserDB(id)
    if (!deleteUser){
      res.status(400).json({message : 'unable to Delete'})
    }
    if (deleteUser.deletedCount == 0) {
      return res.status(404).send('User Not Found')
    }
    return res.status(202).send('deleted Succesfully')
  } catch (error) {
    throw new error ('Failed to delete user')
  }
}


//Get User by Username
exports.GetUserByUsername = async (req, res) => {
  try {
    const Username = req.params.username
    if (!Username) {
      res.status(404).json({message : 'User doesnt exist'})
    }
    const user = await GetuserByUsernameDB(Username)
    if (user.length == 0){
      return res.status(404).json({message : 'User doesnt exist'})
    }
    return res.status(200).send(user)
  } catch (error) {
    res.send('NO user was Found ')
  }
}







