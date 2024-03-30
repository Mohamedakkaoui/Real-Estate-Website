const {CreateReview, GetReviewById} = require('../controllers/reviews.Controllers')
const express = require('express')
const ReviewRoute = express.Router()
const {isAuthenticated} = require('../middlewares/authMiddlewares')





ReviewRoute.post('/',isAuthenticated,CreateReview)
ReviewRoute.get('/:id', GetReviewById)


module.exports = ReviewRoute