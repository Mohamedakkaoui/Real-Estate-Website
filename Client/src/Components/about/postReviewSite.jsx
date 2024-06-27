import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Image from '../../assets/review.png';
import { postReview } from '../../Api/ReviewsApi';

const PostReview = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reviews, setReviews] = useState([]); // State to hold all reviews

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleRatingHover = (value) => {
    setHover(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const data = { rating, comment };
    try {
      const res = await postReview(data);
      console.log("Review added successfully", res.data);

      // Extract the newly added review from the response
      const newReview = res.data.review;
      console.log("Newly added review:", newReview);

      // Update the reviews state with the newly added review
      if (newReview) {
        setReviews([...reviews, newReview]);
      }

      // Reset form
      setRating(0);
      setComment('');
    } catch (error) {
      console.error('Error submitting review:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="">
      <div className="xl:w-full sm:w-[95%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col justify-center items-stretch gap-0">
        <div className="lg:w-[70%] xs:w-full dark:bg-gray-900 dark:text-gray-400 p-4 rounded-md m-0 flex flex-col justify-center">
          <div className="p-4 flex items-start">
            <div className="lg:w-[80%] xs:w-full pr-4">
              <img className="w-max h-auto lg:rounded-t-lg sm:rounded-sm xs:rounded-sm" src={Image} alt="Review" />
            </div>
            <div className="lg:w-[70%] xs:w-full">
              <h2 className="text-xl font-bold mb-4">Post a Review</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Rating
                  </label>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <FaStar
                        key={value}
                        className="cursor-pointer"
                        color={(hover || rating) >= value ? '#ffc107' : '#e4e5e9'}
                        onClick={() => handleRatingClick(value)}
                        onMouseEnter={() => handleRatingHover(value)}
                        onMouseLeave={() => setHover(null)}
                      />
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Comment
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full h-52 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write your review here..."
                    rows="4"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className={`bg-[#FFA920] hover:bg-amber-100 text-white hover:text-[#FFA920] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Review'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostReview;
