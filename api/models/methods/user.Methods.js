const Userschema = require('../schemas/user.Model')



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