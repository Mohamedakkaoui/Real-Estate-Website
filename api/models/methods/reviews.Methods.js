const ReviewSchema = require('../schemas/reviews.Model')



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
    const Review = await ReviewSchema.findOne({ Object_id : id})
    return Review
  } catch (err) {
    throw new Error (err)
  }
}


//update review 
exports.UpdateReviewDB = async (id, data) => {
  try {
    const review = await ReviewSchema.findByIdAndUpdate({ Object_id : id}, data, { new: true })
    return review
  } catch (err) {
    throw new Error(err)
  }
}

// Delete review by ID 

exports.deleteReviewDB = async (id) => {
  try {
    const deletedReview = await ReviewSchema.deleteOne({ Object_id : id })
    return deletedReview
  } catch (err) {
    throw new Error('Failed to delete review: ' + err.message)
  }
}

// get all reviews
exports.getAllReviewsDB = async () => {
  try {
    const Reviews = await ReviewSchema.find()
    return Reviews
  } catch (err) {
    throw new Error(err)
  }
}

//get the user's Review at the top of reviews

exports.ReviewsForUser = async(userID)=> {
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

