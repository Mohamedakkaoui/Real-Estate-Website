const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SiteReviewSchema = new mongoose.Schema(
  {
    Object_id: {
      type: String,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: { createdAt: "AddedAt", updatedAt: "ModifiedAt" } }
);

module.exports = mongoose.model("SiteReview", SiteReviewSchema);
