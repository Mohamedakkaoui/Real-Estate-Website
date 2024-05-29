import React, { useEffect, useState } from "react";
import { GetMYlistingReviews } from "../../Api/ReviewsApi";

function RatingCard() {
  const [reviewslength, Setreviewslength] = useState(0);
  const [ratingsCount, setRatingsCount] = useState([0, 0, 0, 0, 0]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const resreviews = await GetMYlistingReviews();
        const reviews = resreviews.data.Reviews;

        if (!reviews) {
          console.log(resreviews.data.Message);
        } else {
          Setreviewslength(reviews.length);
          const counts = [0, 0, 0, 0, 0];
          
          reviews.forEach(review => {
            if (review.rating >= 1 && review.rating <= 5) {
              counts[review.rating - 1]++;
            }
          });

          setRatingsCount(counts);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    getReviews();
  }, []);

  const calculatePercentage = (count) => {
    return reviewslength > 0 ? (count / reviewslength) * 100 : 0;
  };

  return (
    <div className="card max-w-md rounded overflow-hidden shadow-lg p-5 bg-white h-[377px] top-20 ml-3 shadow-r-xl mb-10">
      <div className="w-full mx-auto px-auto">
        <div className="flex items-center border-b-2 border-gray-200 mb-3">
          <div className="text-xl font-semibold mb-4">Reviews Statistics</div>
        </div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-6">
          {reviewslength} global ratings
        </p>
        {[5, 4, 3, 2, 1].map((star) => (
          <div key={star} className="flex items-center mt-4 pb-3">
            <a
              href="#"
              className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline mr-4"
            >
              {star} star
            </a>
            <div className="h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700 w-[70%]">
              <div
                className="h-5 bg-yellow-300 rounded"
                style={{ width: `${calculatePercentage(ratingsCount[star - 1])}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {calculatePercentage(ratingsCount[star - 1]).toFixed(0)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RatingCard;