const UserSchema = require('../schemas/user.Model')
const ListingsSchema=require('../schemas/listing.Model');
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
exports.saveListingForUser = async(userId,listingId)=>{
  try {
    const user = await UserSchema.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }
     // Vérifier si le listingId existe réellement dans la base de données
     if (mongoose.Types.ObjectId.isValid(listingId)) 
     { const listing = await ListingsSchema.findOne({_id : listingId})
       if (listing == null) {
        return { error: 'Listing not found in the data base' };

    }
       
     }else{
      return { error: 'id not valide ' };
    }
    
    const watchlist = user.watchList
    const idStrings = watchlist.map(obj => obj.toString());
    if(idStrings.includes(listingId))
    {
      return { error: ' item alread registred in the watchlist!' };
    }
   
    
    user.watchList.push(listingId); // Assuming you want to save the listing ID
    await user.save();
    return user;

  } catch (error) {
    
  }
}
