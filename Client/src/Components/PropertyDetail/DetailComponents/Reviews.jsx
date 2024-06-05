import React from "react";
import { FaStar } from "react-icons/fa";
import StarRating from './StarsRating';

import { useState } from 'react';

function Reviews({ reviews }) {
  const [displayedReviews, setDisplayedReviews] = useState(3);

  const handleShowMore = () => {
    // Increase the number of displayed reviews by 3
    setDisplayedReviews(prev => prev + 3);
  };

  return (
    <div className="bg-white shadow-lg shadow-t-xl rounded-lg overflow-hidden border p-4 mt-10 mb-10">
      <div className="flex items-center border-b-2 pb-5 w-[95%] m-auto">
        <FaStar className="text-[#FFA920] mr-2 size-5" />
        <span className="text-black text-xl font-semibold">
          Reviews{' '}
          <span className="text-gray-500 font-semibold text-sm">
            ({reviews.length} reviews)
          </span>
        </span>
      </div>
      <div className="w-[95%] m-auto flex flex-col">
        {reviews.slice(0, displayedReviews).map((review, index) => (
          <article key={index} className="mt-5 flex pb-5 border-b-2">
            <div className="w-[15%]  mr-2">
              <img className="rounded-[100%] w-full " src={review.owner.ProfilePic} alt=""></img>
            </div>
            <div className=" w-[100%]">
              <div className="flex justify-between pt-2 mb-2">
                <h4 className="text-l font-semibold text-gray-900 dark:text-white">
                  @{review.owner.Username}
                </h4>
                <div className="flex ">
                  <StarRating rating={review.rating} /> {/* Replace the SVG stars with the StarRating component */}
                  <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    {review.rating}
                  </p>
                  <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    out of
                  </p>
                  <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    5
                  </p>
                </div>
              </div>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {review.comment}
              </p>
              <footer className="flex justify-end ">
                <p className=" mb-2 text-sm text-gray-500 dark:text-gray-400">
                  {new Date(review.date).toLocaleDateString()}                      </p>
              </footer>
            </div>

          </article>
        ))}
        {displayedReviews < reviews.length && (
          <div className="w-full flex justify-center">
            <button
              onClick={handleShowMore}
              className="w-max mt-3 bg-primary hover:bg-[#FFF1DA] text-white hover:text-primary font-bold py-2 px-4 rounded"
            >
              Show More
            </button></div>
        )}
      </div>
    </div>
  );
}

export default Reviews