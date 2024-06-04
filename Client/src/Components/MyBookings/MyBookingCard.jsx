import React from 'react'
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";

function MyBookingCard() {
    return (
        <>
            <div className="bookings-item bg-white rounded shadow-md overflow-hidden border border-gray-200">
                <div className="bookings-item-header flex items-center justify-between px-4 py-2 bg-gray-100">
                    <h4 className="text-lg font-semibold">For <a href="#" className="text-blue-500 hover:underline">Gorgeous house for sale</a></h4>
                    <img className="w-16 h-16 object-cover rounded" src="https://homeradar.kwst.net/images/all/2.jpg" alt="" />
                </div>
                <div className="bookings-item-content p-4">
                    <ul className="space-y-2">
                        <li><span className="font-semibold">From:</span> 18.05.2021</li>
                        <li><span className="font-semibold">To:</span> 20.05.2021</li>
                        <li><span className="font-semibold">Price:</span> 123 MAD</li>
                    </ul>
                </div>
                <div className="bookings-item-footer flex items-center justify-between px-4 py-2 bg-gray-100">
                    <span className="text-sm text-gray-500">12 December 2020</span>
                    <ul className="flex space-x-2" style={{ gap: '15px' }}>
                        <li><a href="#" className="text-gray-500 hover:text-red-500"><MdModeEdit size={25} /></a></li>
                        <li><a href="#" className="text-gray-500 hover:text-blue-500"><MdDelete size={25} /></a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MyBookingCard