const SiteReviewSchema = require("../schemas/SiteReviews.Model");

//add a review
exports.AddSiteReviewDB = async (data) => {
  try {
    const Review = new SiteReviewSchema(data)
    return await Review.save()
  } catch (err) {
    throw new Error(err)
  }
}

// Delete review by ID
exports.deleteSiteReviewDB = async (id) => {
  try {
    const deletedReview = await SiteReviewSchema.deleteOne({ Object_id: id });
    return deletedReview;
  } catch (err) {
    throw new Error("Failed to delete review: " + err.message);
  }
}

// get all reviews
exports.getAllSiteReviewsDB = async () => {
  try {
    const Reviews = await SiteReviewSchema.find().populate("owner", "ProfilePic Username");
    return Reviews;
  } catch (err) {
    throw new Error(err);
  }
}