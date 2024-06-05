import React, { useEffect, useState } from "react";

function RatingDashCard({ Reviews }) {
  const [reviewslength, Setreviewslength] = useState(0);
  const [ratingsCount, setRatingsCount] = useState([0, 0, 0, 0, 0]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        if (!Reviews) {
          console.log("no Reviews Found");
        } else {
          Setreviewslength(Reviews.length);
          const counts = [0, 0, 0, 0, 0];

          Reviews.forEach((review) => {
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
  }, [Reviews]);

  const calculatePercentage = (count) => {
    return reviewslength > 0 ? (count / reviewslength) * 100 : 0;
  };

  return (
    <div className="card w-full rounded overflow-hidden shadow-lg bg-white h-full top-20 shadow-r-xl">
      <div className="w-full mx-auto px-auto h-full mt-3">
        <div className="flex items-center border-b-2 border-gray-200 mb-3">
          <div className="text-xl font-semibold mb-4">Reviews Statistics</div>
        </div>
        <p className="mb-3">See what other are saying about Our website :</p>
        <p className="flex font-semibold mb-6">
          <p className="text-[#FFA920] text-2xl">{reviewslength} </p> <p className="text-gray-500 dark:text-gray-400 ml-2 mt-2">global ratings</p>
        </p>
        {[5, 4, 3, 2, 1].map((star) => (
          <div key={star} className="flex items-center mt-6 pb-3">
            <a
              href="#"
              className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline mr-4"
            >
              {star} star
            </a>
            <div className="h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700 w-[70%]">
              <div
                className="h-5 bg-yellow-300 rounded"
                style={{
                  width: `${calculatePercentage(ratingsCount[star - 1])}%`,
                }}
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

export default RatingDashCard;
