const DeleteUserDB = require('../models/methods/user.Methods')


exports.DeleteUser = async () => {
  try {
    const id  = req.user.id
    const DeletedUser = await DeleteUserDB(id)
    if(DeletedUser.deletedCount == 0)
      {
        return res.status(404).send('User Not Found')
      }
      return res.status(202).send('deleted Succesfully')
  } catch (error) {
    console.log(error)
  }
}