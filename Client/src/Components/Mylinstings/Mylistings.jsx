import React from 'react'
import { PiListBold } from "react-icons/pi";
import SingleListing from './SingleListing';



export default function Mylistings() {
    return (
        <div>
            <div className='flex items-center ' style={{ gap: '10px', margin: '25px 10px', borderBottom: '1px grey solid', paddingBottom: '5px' }}>
                <PiListBold />
                <h4>Listings</h4>
            </div>
            <div className="flex flex-wrap gap-4 justify-between">
                <div style={{ width: '48%' }}>
                    <div className="my-listing-item">
                        <SingleListing />

                    </div>
                </div>

                <div style={{ width: '48%' }}>
                    <div className="my-listing-item">
                        <SingleListing />

                    </div>
                </div>
            </div>

        </div>
    )
}
