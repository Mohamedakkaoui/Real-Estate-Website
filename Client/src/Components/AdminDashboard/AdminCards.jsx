import React from "react";
import "../UserCards.css";
import { LiaListSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";

function AdminCards({Users, Bookings, Listings, Reviews}) {

  return (
    <div className="flex  justify-between gap-5">
      <div
        className="transform hover:translate-y-[-5px] cursor-pointer transition-all duration-300 flex justify-between shadow-md bg-white p-4 rounded-lg h-[150px]"
        style={{ width: "49%" }}
      >
        <div className="details">
          <div className="text text-lg font-medium text-[#02293e]">
            Total Users
          </div>
          <div className="title text-4xl font-bold mt-2 text-gray-400">{Users.length}</div>
          <div className="text-sm mt-4"> +2 newly added listings</div>
        </div>
        <div className="icon text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-[#FFA920] rounded-full">
            <LiaListSolid size={26} className="text-white" />
          </div>
        </div>
      </div>
      <div
        className="transform hover:translate-y-[-5px] cursor-pointer transition-all duration-300 flex justify-between bg-white p-4 rounded-lg shadow-md h-[150px]"
        style={{ width: "49%" }}
      >
        <div className="details">
          <div className="text text-lg font-medium text-[#02293e]">
            Total Listings
          </div>
          <div className="title text-4xl font-bold mt-2 text-gray-400">{Listings.length}</div>
          <div className="text-sm mt-4"> +1 newly added Bookings</div>
        </div>
        <div className="icon text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-[#FFA920] rounded-full">
            <BsCalendar2Date size={26} className="text-white" />
          </div>
        </div>
      </div>
      <div
        className="transform hover:translate-y-[-5px] cursor-pointer transition-all duration-300 flex justify-between bg-white p-4 rounded-lg shadow-md h-[150px]"
        style={{ width: "49%" }}
      >
        <div className="details">
          <div className="text text-lg font-medium text-[#02293e]">
            Total Bookings
          </div>
          <div className="title text-4xl font-bold mt-2 text-gray-400">{Bookings.length}</div>
          <div className="text-sm mt-4"> +12 newly added listings</div>
        </div>
        <div className="icon text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-[#FFA920] rounded-full">
            <FaRegHeart size={26} className="text-white" />
          </div>
        </div>
      </div>
      <div
        className="transform hover:translate-y-[-5px] cursor-pointer transition-all duration-300 flex justify-between bg-white p-4 rounded-lg shadow-md h-[150px]"
        style={{ width: "49%" }}
      >
        <div className="details">
          <div className="text text-lg font-medium text-[#02293e]">Reviews</div>
          <div className="title text-4xl font-bold mt-2 text-gray-400">{Reviews.length}</div>
          <div className="text-sm mt-4"> +1 newly added Reviews</div>
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

export default AdminCards;