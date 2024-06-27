const { AddSiteReviewDB, deleteSiteReviewDB, getAllSiteReviewsDB } = require('../models/methods/SiteReviewsMethods.js')
const mongoose = require('mongoose')
const generateCustomUUID = require('../Utils/customUuidGenerator.js')

//Create Review
exports.CreateSiteReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const owner = req.user.id;
    if (!owner) {
      return res.status(404).send("No user identified");
    }
    const Object_id = generateCustomUUID();
    const Review = await AddSiteReviewDB({
      rating,
      comment,
      owner,
      Object_id,
    });
    if (!Review) {
      return res
        .status(404)
        .send("Failed to create review. Please try again later.");
    }
    return res
      .status(200)
      .json({ message: "Review created successfully", review: Review });
  } catch (error) {
    return res
      .status(404)
      .json({
        error: "Error creating review. Please try again later.",
        Error: error.message,
      });
  }
};


// delete review by ID
exports.deleteSiteReview = async (req, res) => {
  try {
    const reviewId = req.params.id;
    if (!reviewId) {
      return res.status(400).send("Review ID is required");
    }
    const deletedReview = await deleteSiteReviewDB(reviewId);
    if (!deletedReview) {
      res.status(400).json({ message: "unable to Delete" });
    }
    if (deletedReview.deletedCount == 0) {
      return res.status(404).send("Review not found");
    }
    return res.status(200).json({ Message: "Review deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({
        error: "Error deleting review. Please try again later.",
        details: error.message,
      });
  }
};

//get all reviews
exports.getAllSiteReviews = async (req, res) => {
  try {
    const reviews = await getAllSiteReviewsDB();
    return res
      .status(200)
      .json({ Message: "Data fetched ok 200", Reviews: reviews });
  } catch (error) {
    return res
      .status(404)
      .json({ Message: "Couldnt Get Review", Error: error.message });
  }
};