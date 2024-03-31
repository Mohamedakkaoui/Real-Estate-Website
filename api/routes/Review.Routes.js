const {CreateReview, GetReviewById, deleteReview} = require('../controllers/reviews.Controllers')
const express = require('express')
const ReviewRoute = express.Router()
const {isAuthenticated} = require('../middlewares/authMiddlewares')





ReviewRoute.post('/',isAuthenticated,CreateReview)
ReviewRoute.get('/:id', GetReviewById)
ReviewRoute.delete('/:id',deleteReview)


module.exports = ReviewRoute