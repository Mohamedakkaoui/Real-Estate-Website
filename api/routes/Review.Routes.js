const { CreateReview, getAllReviews } = require('../controllers/reviews.Controllers')
const express = require('express')
const ReviewRoute = express.Router()
const { isAuthenticated } = require('../middlewares/authMiddlewares')




ReviewRoute.get('/', getAllReviews)
ReviewRoute.post('/', isAuthenticated, CreateReview)



module.exports = ReviewRoute