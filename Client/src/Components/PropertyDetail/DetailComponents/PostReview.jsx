import React from "react";
import BasicRating from "../../Common/RatingStars";

function PostReview() {
  return (
    <div className="bg-white shadow-lg shadow-t-xl rounded-lg overflow-hidden border p-4 mt-10 mb-10">
      <div className="flex items-center border-b-2 pb-5 w-[95%] m-auto">
        <span className="text-black text-xl font-semibold">
          Leave a Review{" "}
        </span>
      </div>
      <div className="w-[95%] mx-auto flex gap-7 mt-3 mb-3">
        <div className="text-lg font-semibold">Rating</div>
        <div> <BasicRating/></div>
      </div>
      <div className="flex flex-col w-[95%] m-auto">
        <div className="mt-2 mb-4 font-semibold ">Your Review</div>
        <div>
          {" "}
          <textarea
            name=""
            id=""
            className="w-full rounded-lg border-1 border-gray-300 h-[200px]"
            placeholder="Your message"
          ></textarea>
        </div>
      </div>
      <div className="w-[95%] m-auto mt-7">
        <button
          className="middle m-auto none center w-full rounded-lg bg-[#FFA920] py-3 px-6 font-sans text-md font-bold  text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
          type="submit"
        >
          Send Review
        </button>
      </div>
    </div>
  );
}

export default PostReview;
