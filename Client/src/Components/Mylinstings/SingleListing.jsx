import React, { useState, useRef, useEffect } from 'react';
import { AiFillEye } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { SlOptionsVertical } from "react-icons/sl";




function SingleListing({ listing }) {
    const imageUrl = listing.images && listing.images.length > 0 ? listing.images[0].url : 'https://st4.depositphotos.com/17828278/24401/v/450/depositphotos_244011872-stock-illustration-image-vector-symbol-missing-available.jpghttps://st4.depositphotos.com/17828278/24401/v/450/depositphotos_244011872-stock-illustration-image-vector-symbol-missing-available.jpg';
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
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
                                <div className='flex justify-between'>
                                    <h4 className="text-lg text-grey text-shadow-lg font-semibold">
                                        {listing.title || 'Gorgeous House For Sale'}
                                    </h4>
                                    <div className="relative inline-block text-left" ref={dropdownRef}>
                                        <div>
                                            <button onClick={toggleDropdown} type="button" className="inline-flex justify-center border rounded-full  border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none  focus:ring-offset-2 focus:ring-offset-gray-100">
                                                <SlOptionsVertical className='' />
                                            </button>
                                        </div>
                                        {isOpen && (
                                            <div className="absolute top-[-140px] right-[-10px] mt-12 mx-[10px] w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                    <ul className="flex flex-col gap-2 flex-wrap justify-between px-4">
                                                        <li>
                                                            <a href="#" className="flex items-center text-gray-600 hover:text-gray-800" style={{ gap: '7px' }}>
                                                                <AiFillEye /> View
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a href="#" className="flex items-center text-gray-600 hover:text-gray-800" style={{ gap: '7px' }}>
                                                                <MdEdit /> Edit                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="flex items-center text-[#fc5c65] hover:text-[#d63031]" style={{ gap: '7px' }}>
                                                                <MdDelete /> Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex items-center text-sm mt-1" style={{ gap: '5px' }}>
                                    <GrLocation color="grey" />
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span className='text-grey'>
                                        {listing.location || '70 Bright St New York, USA'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SingleListing;

