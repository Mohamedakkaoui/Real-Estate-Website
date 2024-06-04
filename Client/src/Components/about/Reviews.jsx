import { reviews } from "../../Data/DummyData";
import SingleReviewCard from "./SingleReviewCard";

const Reviews = () => {
  return (
    <div className="pt-10 pb-16">
      <div className="text-center">
        <h1 className="mx-auto sub-heading">Reviews</h1>
        <h1 className="heading">What People Say About Us</h1>
      </div>
      <div className="flex flex-wrap gap-4 mt-8">
        {reviews.slice(0, 3).map((review) => (
          <SingleReviewCard key={review.id} {...review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;

