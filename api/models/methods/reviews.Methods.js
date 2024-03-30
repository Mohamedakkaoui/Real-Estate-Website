const ReviewSchema = require('../schemas/reviews.Model')
const mongoose = require('mongoose')



//add a review
exports.addReviewDB = async (data)=> {
  try {
    const Review = new ReviewSchema(data)
    return await Review.save()
  } catch (err) {
    throw new Error (err) 
  }
}