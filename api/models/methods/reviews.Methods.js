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

// get all reviews
exports.getAllReviewsDB = async () => {
  try {
    const reviews = await ReviewSchema.find()
    return reviews
  } catch (error) {
    throw new Error('Failed to fetch reviews from the database : ' + error)
  }
};

