const Userschema = require('../schemas/user.Model')

exports.checkExitingMail = async (email) => {
  try {
      const user = await Userschema.findOne({ email })   
      return user
  }
  catch (error) {
      throw new Error(error)
  }
}

exports.DeleteUserDB = async (id) => {
  try {
    if (mongoose.Types.ObjectId.isValid(id))
    {
      const deltedUser = await Userschema.deleteOne({_id : id})
      return deltedUser
    }
  } catch (error) {
    console.log(error)
  }
}
