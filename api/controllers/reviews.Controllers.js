const {addReviewDB, GetReviewByIdDB,Updatereview} = require('../models/methods/reviews.Methods')

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
//update review
exports.updateReview =async (req, res) =>{
  try{
  const {rating, comment, property_id} = req.body
  const {id}=req.params;
  const user_id = req.user.id
  const review= await Updatereview(id,{rating , comment, user_id, property_id})
  if(!review){
  return res.status(404).json(`message: cannot find any review with ID ${id}`);
}
const update =await GetReviewByIdDB(id);
res.status(200).json(update);
  }catch(error){
      res.status(500).json({message:error.message}) 
  }
}