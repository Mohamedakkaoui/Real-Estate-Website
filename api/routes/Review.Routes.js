
const {CreateReview, GetReviewById,updateReview,deleteReview, getAllReviews} = require('../controllers/reviews.Controllers')


const express = require('express')
const ReviewRoute = express.Router()
const { isAuthenticated } = require('../middlewares/authMiddlewares')





ReviewRoute.post('/',isAuthenticated,CreateReview)
ReviewRoute.get('/:id', GetReviewById)

ReviewRoute.get('/', getAllReviews)
ReviewRoute.put('/:id',isAuthenticated,updateReview);

ReviewRoute.delete('/:id',deleteReview)


module.exports = ReviewRoute