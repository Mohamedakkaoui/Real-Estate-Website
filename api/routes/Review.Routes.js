
const {CreateReview , GetReviewById , updateReview , deleteReview, getAllReviews,getReviewUserAddTop} = require('../controllers/reviews.Controllers')
const express = require('express')
const ReviewRoute = express.Router()
const { isAuthenticated } = require('../middlewares/authMiddlewares')
const {validateReview} = require('../middlewares/validate/validateReview')
const { IsOwner } = require ('../middlewares/IsOwner.js')
const ROLES_LIST = require('../config/Roles_Lists.js')
const verifyRoles = require('../middlewares/roles.js')



 ReviewRoute.post('/add', isAuthenticated,CreateReview)
// ReviewRoute.get('/:id', isAuthenticated, verifyRoles(ROLES_LIST.User, ROLES_LIST.Admin), IsOwner, GetReviewById)

ReviewRoute.get('/', getAllReviews)
// ReviewRoute.put('/:id', isAuthenticated, verifyRoles(ROLES_LIST.User), IsOwner, updateReview)


// ReviewRoute.delete('/:id', isAuthenticated, verifyRoles(ROLES_LIST.Admin, ROLES_LIST.User), IsOwner, deleteReview)
ReviewRoute.get('/:userID',isAuthenticated,getReviewUserAddTop)

module.exports = ReviewRoute
