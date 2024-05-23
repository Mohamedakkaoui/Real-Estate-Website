import React from 'react'
import { AiFillEye } from "react-icons/ai";
import { GiSightDisabled } from "react-icons/gi";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { GrLocation } from "react-icons/gr";



function SingleListing() {
    return (
        <div className="flex flex-wrap">
            <div className="w-full  p-2">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="relative">
                        <img src='https://homeradar.kwst.net/images/all/3.jpg' alt="House Image" className="w-full h-48 object-cover shadow-inner" />
                    </div>

                    <div className="p-4">
                        <div className=" ">
                            <h4 className="text-lg text-grey text-shadow-lg font-semibold">Gorgeous House For Sale</h4>
                            <div className="flex items-center  text-sm mt-1 " style={{ gap: '5px' }}>
                                <GrLocation color="grey" />
                                <i className="fas fa-map-marker-alt"></i> <span className='text-grey'>70 Bright St New York, USA</span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <ul className="flex flex-wrap justify-between px-4">
                                <li ><a href="#" className="flex items-center text-gray-600 hover:text-gray-800" style={{ gap: '7px' }}><AiFillEye />View</a></li>
                                <div class="h-5 border-l border-gray-300"></div>
                                <li ><a href="#" className="flex items-center text-gray-600 hover:text-gray-800" style={{ gap: '7px' }}><GiSightDisabled />Deactivate</a></li>
                                <div class="h-5 border-l border-gray-300"></div>

                                <li ><a href="#" className="flex items-center text-gray-600 hover:text-gray-800" style={{ gap: '7px' }}><MdEdit />Edit</a></li>
                                <div class="h-5 border-l border-gray-300"></div>

                                <li><a href="#" className="flex items-center text-gray-600 hover:text-gray-800" style={{ gap: '7px' }}><MdDelete />Delete</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default SingleListing