const {addReviewDB, GetReviewByIdDB, deleteReviewDB} = require('../models/methods/reviews.Methods')

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


//Get review By Id
exports.GetReviewById = async (req, res) => {
  try {
    const { id }= req.params
    if (!id)  {
      return res.status(404).json({message : 'No review ID was provided.'})
    }
    const review = await GetReviewByIdDB(id)
    if (!review) {
      return res.status(404).json({message : 'No review was found fro the provided ID'})
    }
    return res.status(200).json({message :'Review retrieved successfully', Review : review })
  } catch (error) {
    return res.status(404).json({message : 'Unable to retrieve review. Please try again later.', error : error.messaeg})
  }
}

// delete review by ID 

exports.deleteReview = async (req, res) => {
  try {
    const reviewId = req.params.id;
    if (!reviewId) {
      return res.status(400).send('Review ID is required');
    }
    const deletedReview = await deleteReviewDB(reviewId);
    if (!deletedReview){
      res.status(400).json({message : 'unable to Delete'})
    }
      if(deletedReview.deletedCount == 0) {
      return res.status(404).send('Review not found');
    }
    return res.status(200).json({ message: 'Review deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Error deleting review. Please try again later.', details: error.message });
  }
};
