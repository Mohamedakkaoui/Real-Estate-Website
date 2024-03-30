const {addReviewDB} = require('../models/methods/reviews.Methods')

//Create Review
exports.CreateReview = async (req, res) => {
  try {
    const {rating, comment, property_id} = req.body
    const user_id = req.user.id
    if (!user_id) {
      return res.status(404).send('No user identified')
    }
    const Review = await addReviewDB({rating , comment, user_id, property_id})
    if (!Review){
      return res.status(404).send('Failed to create review. Please try again later.')
    }
    return res.status(200).json({message : 'Review created successfully', review : Review})
  } catch (error) {
    return res.status(404).json({error : "Error creating review. Please try again later.", details : error.message})
  }
}