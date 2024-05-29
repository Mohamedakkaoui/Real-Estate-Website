const UserSchema = require('../schemas/user.Model')
const ListingsSchema = require('../schemas/listing.Model');

const mongoose = require('mongoose')


// method to verify if an Email is already used
exports.checkExitingMail = async (email) => {
  try {
    const user = await UserSchema.findOne({ Email: email })
    return user
  }
  catch (error) {
    throw new Error('Email not found : ' + error)
  }
}

//save listing for users
exports.saveListingForUser = async (userId, listingId) => {
  try {
    const user = await UserSchema.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    // Vérifier si le listingId existe réellement dans la base de données
    if (mongoose.Types.ObjectId.isValid(listingId)) {
      const listing = await ListingsSchema.findOne({ _id: listingId })
      if (listing == null) {
        return { error: 'Listing not found in the data base' };

      }

    } else {
      return { error: 'id not valide ' };
    }

    const watchlist = user.watchList
    const idStrings = watchlist.map(obj => obj.toString());
    if (idStrings.includes(listingId)) {
      return { error: ' item alread registred in the watchlist!' };
    }



    user.watchList.push(listingId); // Assuming you want to save the listing ID
    await user.save();
    return user;

  } catch (error) {

  }
}
// get all users
exports.getAllUsersDB = async () => {
  try {
    const users = await UserSchema.find().select('FirstName LastName Username Email PhoneNumber ProfilePic isActive -_id')
    return users
  } catch (error) {
    throw new Error('Failed to fetch users from the database : ' + error)
  }
}

//method to get user by Id 
exports.GetUserbyIdallInfoDB = async (id) => {
  try {
    const user = await UserSchema.findById({ _id: id })
    return user
  } catch (error) {
    throw new Error('Couldnt Find User : ' + error)
  }
}

//method to get user by Id 
exports.GetUserbyIdDB = async (id) => {
  try {
    const user = await UserSchema.findById({ _id: id }).select('FirstName LastName watchList Username Email PhoneNumber -_id')
    return user
  } catch (error) {
    throw new Error('Couldnt Find User : ' + error)
  }
}

//method to delete user
exports.DeleteUserDB = async (id) => {
  try {
    if (mongoose.Types.ObjectId.isValid(id)) {
      const deltedUser = await UserSchema.deleteOne({ _id: id })
      return deltedUser
    }
  } catch (error) {
    throw new Error('Failed to delete user : ' + error)
  }
}

//find user and update
exports.updateProfileDB = async (id, data) => {
  try {
    if (mongoose.Types.ObjectId.isValid(id)) {
      const user = await UserSchema.findByIdAndUpdate(id, data, { new: true })
      return user
    }
  }
  catch (error) {
    throw new Error("Failed to update User'Profile : " + error)
  }
}


//fid user by username
exports.GetuserByUsernameDB = async (Username) => {
  try {
    const user = await UserSchema.findOne({ Username })
    return user
  } catch (error) {
    throw new error('No user was Found : ' + error)

  }
}


//method to get user by Id 
exports.GetMyProfile = async (id) => {
  try {
    const user = await UserSchema.findById({ _id: id }).select('FirstName LastName Username Email PhoneNumber ProfilePic -_id')
    return user
  } catch (error) {
    throw new Error('Couldnt Find User : ' + error)
  }
}
