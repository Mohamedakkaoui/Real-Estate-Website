import React from 'react'
import './UserCards.css'
import { LiaListSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";


function UserCards() {
    return (
        <div className='flex flex-wrap justify-between gap-4'>
            <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md " style={{ width: "49%" }}>
                <div className="details">
                    <div className="text text-xl font-semibold">Total Listings</div>
                    <div className="title text-2xl">192</div>
                </div>
                <div className="icon text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
                        <LiaListSolid size={26} className="text-gray-700" />
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md " style={{ width: "49%" }}>
                <div className="details">
                    <div className="text text-xl font-semibold">Total Bookings</div>
                    <div className="title text-2xl">192</div>
                </div>
                <div className="icon text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
                        <BsCalendar2Date size={26} className="text-gray-700" />
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md " style={{ width: "49%" }}>
                <div className="details">
                    <div className="text text-xl font-semibold">Favourites</div>
                    <div className="title text-2xl">192</div>
                </div>
                <div className="icon text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
                        <FaRegHeart size={26} className="text-gray-700" />
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md " style={{ width: "49%" }}>
                <div className="details">
                    <div className="text text-xl font-semibold">Reviews</div>
                    <div className="title text-2xl">192</div>
                </div>
                <div className="icon text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
                        <FaRegCommentAlt size={26} className="text-gray-700" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCards