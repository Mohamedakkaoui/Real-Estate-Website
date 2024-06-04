import React from 'react'
import { AiFillEye } from "react-icons/ai";
import { GiSightDisabled } from "react-icons/gi";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

function SingleListing({ listing }) {
    const imageUrl = listing.images && listing.images.length > 0 ? listing.images[0].url : 'https://st4.depositphotos.com/17828278/24401/v/450/depositphotos_244011872-stock-illustration-image-vector-symbol-missing-available.jpghttps://st4.depositphotos.com/17828278/24401/v/450/depositphotos_244011872-stock-illustration-image-vector-symbol-missing-available.jpg';

    return (
        <div className="flex flex-wrap">
            <div className="w-full p-2">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="relative">
                        <img
                            src={imageUrl}
                            alt="House Image"
                            className="w-full h-[300px] object-cover shadow-inner"
                        />
                    </div>

                    <div className="p-4">
                        <div>
                            <h4 className="text-lg text-grey text-shadow-lg font-semibold">
                                {listing.title || 'Gorgeous House For Sale'}
                            </h4>
                            <div className="flex items-center text-sm mt-1" style={{ gap: '5px' }}>
                                <GrLocation color="grey" />
                                <i className="fas fa-map-marker-alt"></i>
                                <span className='text-grey'>
                                    {listing.location || '70 Bright St New York, USA'}
                                </span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <ul className="flex flex-wrap justify-between px-4">
                                <li>
                                    <a href="#" className="flex items-center text-gray-600 hover:text-gray-800" style={{ gap: '7px' }}>
                                        <AiFillEye />View
                                    </a>
                                </li>
                                <div className="h-5 border-l border-gray-300"></div>
                                <li>
                                    <a href="#" className="flex items-center text-gray-600 hover:text-gray-800" style={{ gap: '7px' }}>
                                        <GiSightDisabled />Deactivate
                                    </a>
                                </li>
                                <div className="h-5 border-l border-gray-300"></div>
                                <li>
                                    <a href="#" className="flex items-center text-gray-600 hover:text-gray-800" style={{ gap: '7px' }}>
                                        <MdEdit />Edit
                                    </a>
                                </li>
                                <div className="h-5 border-l border-gray-300"></div>
                                <li>
                                    <a href="#" className="flex items-center text-gray-600 hover:text-gray-800" style={{ gap: '7px' }}>
                                        <MdDelete />Delete
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleListing;

