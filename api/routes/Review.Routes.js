const {CreateReview, GetReviewById,updateReview} = require('../controllers/reviews.Controllers')
const express = require('express')
const ReviewRoute = express.Router()
const {isAuthenticated} = require('../middlewares/authMiddlewares')





ReviewRoute.post('/',isAuthenticated,CreateReview)
ReviewRoute.get('/:id', GetReviewById)
ReviewRoute.put('/:id',isAuthenticated,updateReview);



module.exports = ReviewRoute