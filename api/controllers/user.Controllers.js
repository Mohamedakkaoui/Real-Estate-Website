const {DeleteUserDB} = require('../models/methods/user.Methods')

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