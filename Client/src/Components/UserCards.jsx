import React, { useEffect, useState } from "react";
import "./UserCards.css";
import { LiaListSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";
import { GetMyListings } from "../Api/ListingsApi";
import { GetMYlistingReviews } from "../Api/ReviewsApi";
import { GetMyBookings } from "../Api/BookingApi";
import { ContextAuth } from "../Context/AuthContext";
function UserCards() {
  const [TotalListings, SetTotalListings] = useState(0);
  const [totalreviews, SetTotalReviews] = useState(0);
  const [myBookings, SetmyBookings] = useState(0);
  const { UserProfile } = ContextAuth();

  useEffect(() => {
    const totalListings = async () => {
      try {
        const resListings = await GetMyListings();
        const listings = resListings.data.Listings;
        if (!listings) {
          console.log(res.data.Message);
        }
        SetTotalListings(listings.length);
        const resReviews = await GetMYlistingReviews();
        const reviews = resReviews.data.Reviews;
        if (!reviews) {
          console.log(resReviews.data.Message);
        }
        SetTotalReviews(reviews.length);
        const resMyBookings = await GetMyBookings();
        const Bookings = resMyBookings.data.MyBookings;
        if (!Bookings) {
          console.log(resMyBookings.data.Message);
        }
        SetmyBookings(Bookings.length);
      } catch (error) {
        console.log(error, error.message);
      }
    };
    totalListings();
  }, [TotalListings, totalreviews, myBookings]);

  return (
    <div className="flex  justify-between gap-5">
      <div
        className="flex justify-between bg-white p-4 rounded-lg shadow-md h-[150px] transform hover:translate-y-[-5px] cursor-pointer transition-all duration-300"
        style={{ width: "49%" }}
      >
        <div className="details ">
          <div className="text text-lg font-medium text-[#02293e]">
            Total Listings
          </div>
          <div className="title text-4xl font-bold mt-2 text-gray-400">
            {TotalListings}
          </div>
          <div className="text-sm mt-4"> +2 newly added listings</div>
        </div>
        <div className="icon text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-[#FFA920] rounded-full">
            <LiaListSolid size={26} className="text-white" />
          </div>
        </div>
      </div>
      <div
        className="flex justify-between bg-white p-4 rounded-lg shadow-md h-[150px] transform hover:translate-y-[-5px] cursor-pointer transition-all duration-300"
        style={{ width: "49%" }}
      >
        <div className="details">
          <div className="text text-lg font-medium text-[#02293e]">
            Total Bookings
          </div>
          <div className="title text-4xl font-bold mt-2 text-gray-400">
            {myBookings}
          </div>
          <div className="text-sm mt-4"> +1 newly added Bookings</div>
        </div>
        <div className="icon text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-[#FFA920] rounded-full">
            <BsCalendar2Date size={26} className="text-white" />
          </div>
        </div>
      </div>
      <div
        className="flex justify-between bg-white p-4 rounded-lg shadow-md h-[150px] transform hover:translate-y-[-5px] cursor-pointer transition-all duration-300"
        style={{ width: "49%" }}
      >
        <div className="details">
          <div className="text text-lg font-medium text-[#02293e]">
            Favourites
          </div>
          <div className="title text-4xl font-bold mt-2 text-gray-400">
            {UserProfile.watchList ? UserProfile.watchList.length : 0}
          </div>
          <div className="text-sm mt-4"> +1 newly added listings</div>
        </div>
        <div className="icon text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-[#FFA920] rounded-full">
            <FaRegHeart size={26} className="text-white" />
          </div>
        </div>
      </div>
      <div
        className="flex justify-between bg-white p-4 rounded-lg shadow-md h-[150px] transform hover:translate-y-[-5px] cursor-pointer transition-all duration-300"
        style={{ width: "49%" }}
      >
        <div className="details">
          <div className="text text-lg font-medium text-[#02293e]">Reviews</div>
          <div className="title text-4xl font-bold mt-2 text-gray-400">
            {totalreviews}
          </div>
          <div className="text-sm mt-4"> +3 newly added Reviews</div>
        </div>
        <div className="icon text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-[#FFA920] rounded-full">
            <FaRegCommentAlt size={26} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCards