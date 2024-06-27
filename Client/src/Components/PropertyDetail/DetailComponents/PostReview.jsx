import React, { useState } from "react";
import BasicRating from "../../Common/RatingStars";
import { useParams } from 'react-router-dom';
import { addNewReview } from "../../../Api/ReviewsApi";



function PostReview() {
  const { propertyId } = useParams()
  const [ratingValue, setRatingValue] = useState(0);

  const handleRatingChange = (newRating) => {
    setRatingValue(newRating);
  };

  const [comment, setComment] = useState([])
  const handleComment = (event) => {
    const newText = event.target.value;
    setComment(newText);

  };
  const handleSubmit = async () => {
    const data = { rating: ratingValue, comment, property_id: propertyId }
    console.log(data);
    const res = await addNewReview(data)
    console.log(res);
  }
  return (
    <div className="bg-white shadow-lg shadow-t-xl rounded-lg overflow-hidden border p-4 mt-10 mb-10">
      <div className="flex items-center border-b-2 pb-5 w-[95%] m-auto">
        <span className="text-black text-xl font-semibold">
          Leave a Review{" "}
        </span>
      </div>
      <div className="w-[95%] mx-auto flex gap-7 mt-3 mb-3">
        <div className="text-lg font-semibold">Rating</div>
        <div> <BasicRating onRatingChange={handleRatingChange} /></div>
      </div>
      <div className="flex flex-col w-[95%] m-auto">
        <div className="mt-2 mb-4 font-semibold ">Your Review</div>
        <div>
          {" "}
          <textarea
            name=""
            id=""
            className="w-full rounded-lg border-1 border-gray-300 h-[200px] resize-none"
            placeholder="Your message"
            onChange={handleComment}
          ></textarea>
        </div>
      </div>
      <div className="w-[95%] m-auto mt-7">
        <button
          className="middle m-auto none center w-full rounded-lg bg-[#FFA920] py-3 px-6 font-sans text-md font-bold  text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
          type="submit"
          onClick={handleSubmit}
        >
          Send Review
        </button>
      </div>
    </div>
  );
}

export default PostReview;

