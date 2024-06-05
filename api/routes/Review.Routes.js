
const { CreateReview, GetReviewById, updateReview, DeleteReviewsAdmin, deleteReview, getAllReviews,
  getReviewUserAddTop, getUserReviews, getAlltheReviews, GetMyListingsReviews,
  GetListingReviews,
} = require('../controllers/reviews.Controllers')
const { CreateSiteReview, deleteSiteReview, getAllSiteReviews } = require('../controllers/SiteReviews.Controllers.js')
const express = require("express");
const ReviewRoute = express.Router();
const { isAuthenticated } = require("../middlewares/authMiddlewares");
const { validateReview } = require("../middlewares/validate/validateReview");
const { IsOwner } = require("../middlewares/IsOwner.js");
const ROLES_LIST = require("../config/Roles_Lists.js");
const verifyRoles = require("../middlewares/roles.js");






ReviewRoute.get("/ListingReviews", GetListingReviews);

ReviewRoute.get("/userReviews", isAuthenticated, getUserReviews);

ReviewRoute.post("/add", isAuthenticated, CreateReview);
ReviewRoute.get('/', isAuthenticated, getAlltheReviews)
ReviewRoute.get('/userReviews', isAuthenticated, getUserReviews)
ReviewRoute.post('/add', isAuthenticated, CreateReview)
// ReviewRoute.get('/:id', isAuthenticated, verifyRoles(ROLES_LIST.User, ROLES_LIST.Admin), IsOwner, GetReviewById)

// ReviewRoute.put('/:id', isAuthenticated, verifyRoles(ROLES_LIST.User), IsOwner, updateReview)

ReviewRoute.get("/MylistingReviews", isAuthenticated, GetMyListingsReviews);
ReviewRoute.delete('/delete/:id', isAuthenticated, deleteReview)
ReviewRoute.delete('/admin/delete/:id', isAuthenticated, DeleteReviewsAdmin)//add role fro admin 
ReviewRoute.get("/:userID", isAuthenticated, getReviewUserAddTop);


//Admin reviews
ReviewRoute.post('/admin/Reviews', isAuthenticated, CreateSiteReview)
ReviewRoute.delete('/admin/Reviews/:id', isAuthenticated, deleteSiteReview)
ReviewRoute.get('/admin/Reviews', isAuthenticated, getAllSiteReviews)
module.exports = ReviewRoute;