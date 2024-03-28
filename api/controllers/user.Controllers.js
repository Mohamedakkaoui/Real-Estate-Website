const {DeleteUserDB} = require('../models/methods/user.Methods')
const {getAllUsersDB}= require('../models/methods/user.Methods')
const {getUsersBId} =require('../models/methods/user.Methods');




exports.getAllUsers = async (req,res) => {
  try {
    const users = await getAllUsersDB();
    res.status(200).json(users);
  } catch (error) {
    console.log(error)
  }
};

//get users by id
exports.getUserById = async (req, res) => {
  try {
    const id= req.user.id;
    console.log('User ID:', id);
    const user =await getUsersBId(id);
        res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};



exports.DeleteUser = async (req, res) => {
  try {
    const id = req.user.id
    const deleteUser = await DeleteUserDB(id)
    if(deleteUser.deletedCount == 0)
      {
        return res.status(404).send('User Not Found')
      }
      return res.status(202).send('deleted Succesfully')
  } catch (error) {
    console.log(error)
  }
}