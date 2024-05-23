import React from 'react'
import { GrFavorite } from "react-icons/gr";
import { GrLocation } from "react-icons/gr";
import { IoMdResize } from "react-icons/io";



function FavsCard() {
    return (
        <div className='w-1/3' style={{ margin: 'auto', width: '31%' }}>
            <div className="flex mb-10 " >
                <div className="listing-card-one rounded-lg h-100 w-100 bg-white " style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 8px 12px rgba(0, 0, 0, 0.1)' }}>
                    <div className="relative  " style={{ padding: '15px' }}>
                        <div>
                            <div className="absolute top-0 left-0 z-10 flex justify-between items-center w-full " style={{ padding: '30px' }}>
                                <div className="border-2 border-white px-2 py-1 bg-black text-white text-xs uppercase">FOR RENT</div>
                                <GrFavorite className="text-white" />
                            </div>

                            <img className='rounded-lg mx-auto' src='https://homy-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_01.af4d4d1d.jpg&w=828&q=75' />
                        </div>
                    </div>

                    <div className="property-info" style={{ padding: "10px 25px", maxWidth: '450px' }}>
                        <a className="text-black font-semibold " href="/listing_details_03" style={{ fontSize: '22px' }}>Blueberry villa</a>
                        <div className="flex address items-center text-100 text-gray-400 my-3 " style={{ gap: '5px' }}>
                            <GrLocation />
                            <div>Twin tower, Acapulco, Mexico</div>
                        </div>
                        <div className='flex justify-between pt-4' style={{ marginTop: "20px", borderTop: "1px dashed #c7c7c7" }}>
                            <ul className="style-none feature d-flex flex-wrap items-center justify-content-between">
                                <li className="flex items-center gap-2">
                                    <IoMdResize />
                                    <span className="fs-16">137 M²</span>
                                </li>
                            </ul>
                            <div className="pl-footer top-border d-flex items-center justify-content-between " >
                                <strong className="price fw-500 color-dark">$3,280</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >


    )
}

export default FavsCard