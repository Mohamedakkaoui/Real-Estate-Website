import React from 'react'
import { MdOutlineDateRange } from "react-icons/md";
import MyBookingCard from './MyBookingCard';



function MyBookings() {
    return (
        <>
            <div>
                <div className='flex items-center ' style={{ gap: '10px', margin: '25px 10px', borderBottom: '1px grey solid', paddingBottom: '5px' }}
                >
                    <MdOutlineDateRange />
                    <h4>Bookings</h4>
                </div>
                <div className="flex flex-wrap gap-4 justify-between ">
                    <div style={{ width: '48%' }}>
                        <div className="bookings-item bg-white rounded shadow-md overflow-hidden border border-gray-200">
                            <MyBookingCard />
                        </div>
                    </div>

                    <div style={{ width: '48%' }}>
                        <div className="bookings-item bg-white rounded shadow-md overflow-hidden border border-gray-200">
                            <MyBookingCard />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MyBookings