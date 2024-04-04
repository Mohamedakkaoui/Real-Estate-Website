
const {CreateReview , GetReviewById , updateReview , deleteReview, getAllReviews} = require('../controllers/reviews.Controllers')
const express = require('express')
const ReviewRoute = express.Router()
const { isAuthenticated } = require('../middlewares/authMiddlewares')
const {validateReview} = require('../middlewares/validate/validateReview')




ReviewRoute.post('/',isAuthenticated,validateReview,CreateReview)
ReviewRoute.get('/:id', GetReviewById)

ReviewRoute.get('/', getAllReviews)
ReviewRoute.put('/:id',isAuthenticated,validateReview,updateReview);

ReviewRoute.delete('/:id',deleteReview)


module.exports = ReviewRoute