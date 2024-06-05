import React from 'react'
import { SlSizeFullscreen } from "react-icons/sl";
import { MdOutlineBedroomChild } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { Checkbox } from "@material-tailwind/react";



function ListingDetails() {
    return (
        // <div className="flex gap-4 flex-wrap justify-between ml-3 mr-3">
        //     <div className="w-2/5 mr-4" style={{ width: "40%" }}> {/* Left section with 40% width */}
        //         <div>
        //             <label htmlFor="email" className="block text-sm text-gray-600 mb-1">Area :</label>
        //             <div className="flex items-center rounded-md h-10 " style={{ backgroundColor: 'BLACK', borderRadius: '10px' }}>
        //                 <SlSizeFullscreen color='white' style={{ margin: '5px' }} className="text-gray-500  " /> {/* Icon */}
        //                 <input
        //                     type="text"
        //                     placeholder="Property size"
        //                     style={{ borderRadius: "10px" }}
        //                     className="outline-none focus:outline-none flex-1"
        //                 /> {/* Input field */}
        //             </div>
        //         </div>
        //         <div>
        //             <label htmlFor="email" className="block text-sm text-gray-600 mb-1">Rooms :</label>
        //             <div className="flex items-center rounded-md h-10 " style={{ backgroundColor: 'black', borderRadius: '10px' }}>
        //                 <MdOutlineBedroomChild color='white' style={{ margin: '5px' }} className="text-gray-500  " /> {/* Icon */}
        //                 <input
        //                     type="text"
        //                     placeholder="Property rooms"
        //                     style={{ borderRadius: "10px" }}
        //                     className="outline-none focus:outline-none flex-1"
        //                 /> {/* Input field */}
        //             </div>
        //         </div>
        //         <div>
        //             <label htmlFor="email" className="block text-sm text-gray-600 mb-1">Bathrooms :</label>
        //             <div className="flex items-center rounded-md h-10 " style={{ backgroundColor: 'black', borderRadius: '10px' }}>
        //                 <MdOutlineBathroom color='white' style={{ margin: '5px' }} className="text-gray-500  " /> {/* Icon */}
        //                 <input
        //                     type="text"
        //                     placeholder="Property bathrooms"
        //                     style={{ borderRadius: "10px" }}
        //                     className="outline-none focus:outline-none flex-1"
        //                 /> {/* Input field */}
        //             </div>
        //         </div>
        //         <div>
        //             <label htmlFor="email" className="block text-sm text-gray-600 mb-1">Accomodation :</label>
        //             <div className="flex items-center rounded-md h-10 " style={{ backgroundColor: 'black', borderRadius: '10px' }}>
        //                 <IoPeopleOutline color='white' style={{ margin: '5px' }} className="text-gray-500  " /> {/* Icon */}

        //                 <input
        //                     type="text"
        //                     placeholder="Property accomodation"
        //                     style={{ borderRadius: "0  10px 10px 0" }}
        //                     className="outline-none focus:outline-none flex-1"
        //                 /> {/* Input field */}
        //             </div>
        //         </div>
        //     </div>
        //     <div className="w-3/5" style={{ width: "55%" }}> {/* Right section takes the remaining width */}
        //         <label htmlFor="email" className="block text-sm text-gray-600 mb-1">Description :</label>

        //         <textarea
        //             className="w-full h-full p-2 border rounded-md resize-none focus:outline-none focus:ring focus:border-blue-500"
        //             placeholder="Enter your description here..."
        //         ></textarea>
        //     </div>
        //     <div className="w-full mt-4 flex flex-wrap " style={{ gap: '10px' }}> {/* Third section with full width and flex-wrap */}
        //         <label htmlFor="amenities" className="block text-sm text-gray-600 mb-1">Amenities :</label>
        //         <div className="flex w-full justify-between gap-10 ">
        //             <div className="w-1/3 flex flex-col justify-between " style={{ gap: '10px' }}>
        //                 <Checkbox label="Bathroom amenities" style={{ gap: '10px' }} />
        //                 <Checkbox label="Laundry facilities" />
        //                 <Checkbox label="Entertainment provisions" />
        //             </div>
        //             <div className="w-1/3 flex flex-col gap-10 justify-between">
        //                 <Checkbox label="Internet access (WiFi)" />
        //                 <Checkbox label="Equipped kitchen" />
        //                 <Checkbox label="Parking availability" />
        //             </div>
        //             <div className="w-1/3 flex flex-col gap-10 justify-between">
        //                 <Checkbox label="Heating and cooling" />
        //                 <Checkbox label="Self check-in" />
        //                 <Checkbox label="Safety equipment" />
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default ListingDetails