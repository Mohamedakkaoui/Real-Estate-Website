const ReviewSchema = require('../schemas/reviews.Model')
const mongoose = require('mongoose')



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
    if (mongoose.Types.ObjectId.isValid(id))
    {
      const Review = await ReviewSchema.findOne({_id : id})
      return Review
    }
  } catch (err) {
    throw new Error (err)
  }
}


//update review 
exports.UpdateReviewDB = async (id, data) => {
  try {
    if (mongoose.Types.ObjectId.isValid(id))
    {
    const review = await ReviewSchema.findByIdAndUpdate(id, data, { new: true })
    return review
    }
  } catch (err) {
    throw new Error(err)
  }
}

// Delete review by ID 

exports.deleteReviewDB = async (id) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
    {
      throw new Error('Invalid review ID')
    }
    const deletedReview = await ReviewSchema.deleteOne({ _id: id });
    return deletedReview
  } catch (err) {
    throw new Error('Failed to delete review: ' + err.message);
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
