const mongoose = require('mongoose')
const ReviewSchema = require('../schemas/reviews.Model')
const { FindListingByOwnerIdDB } = require('./listing.Methods')



//add a review
exports.addReviewDB = async (data) => {
  try {
    const Review = new ReviewSchema(data)
    return await Review.save()
  } catch (err) {
    throw new Error(err)
  }
}



//Get review by ID
exports.GetReviewByIdDB = async (id) => {
  try {
    const Review = await ReviewSchema.findOne({ Object_id: id })
    return Review
  } catch (err) {
    throw new Error(err)
  }
}


//get listing reviews
exports.GetListingReviewsDB = async (id) => {
  try {
    const response = await ReviewSchema.find({ property_id: id }).populate('owner', 'Username ProfilePic -_id').select('-_id -__v -property_id')
    console.log(response)
    return response
  } catch (err) {
    throw new Error(err)
  }
}





//update review 
exports.UpdateReviewDB = async (id, data) => {
  try {
    const review = await ReviewSchema.findByIdAndUpdate({ Object_id: id }, data, { new: true })
    return review
  } catch (err) {
    throw new Error(err)
  }
}

// Delete review by ID 

exports.deleteReviewDB = async (id) => {
  try {
    const deletedReview = await ReviewSchema.deleteOne({ Object_id: id })
    return deletedReview
  } catch (err) {
    throw new Error('Failed to delete review: ' + err.message)
  }
}

// get all reviews
exports.getAllReviewsDB = async () => {
  try {
    const Reviews = await ReviewSchema.find();
    return Reviews;

  } catch (err) {
    throw new Error(err)
  }
}

//get the user's Review at the top of reviews

exports.ReviewsForUser = async (userID) => {
  try {
    const allReviews = await ReviewSchema.find({}).sort({ _id: -1 });
    const userReviewIndex = allReviews.findIndex(review => review.user === userID);
    if (userReviewIndex !== -1) {
      const userReview = allReviews.splice(userReviewIndex, 1)[0];
      allReviews.unshift(userReview);
    }
    return allReviews;
  } catch (error) {
    throw error;
  }
}



//calculae Rating score

exports.calculateRating = async (propertyId, res) => {
  try {
    const allReviews = await ReviewSchema.find({ property_id: propertyId })
    const reviewCount = allReviews.length;

    if (reviewCount === 0) {
      return res.send('no ratings to calculate');
    }

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRatingScore = totalRating / reviewCount;

    return averageRatingScore;
  }
  catch (err) { throw err }
}



//get reviews of a user by ID
exports.GetReviewOfUser = async (UserId) => {
  try {
    const Reviews = await ReviewSchema.find({ owner: UserId }).populate('property_id', 'title price images -_id').populate('owner', 'Username ProfilePic -_id').select('-_id ')
    return Reviews
  } catch (err) {
    throw new Error(err)
  }
}


exports.MyListingReviewsDB = async (id) => {
  try {
    const Listings = await FindListingByOwnerIdDB(id)
    const ListingsIDs = Listings.map(Listing => Listing._id)
    const Reviews = await ReviewSchema.find({ property_id: { $in: ListingsIDs } }).populate('property_id', 'title images price').populate('owner', 'Username Email')
    return Reviews
  } catch (error) {
    throw error
  }
}
// get all reviews
exports.getAllReviewsfromDB = async () => {
  try {
    const Reviews = await ReviewSchema.find().select('-_id').populate('owner', 'FirstName LastName ProfilePic -_id').populate('property_id', 'title price images -_id')
    return Reviews;

  } catch (err) {
    throw new Error(err)
  }
}

