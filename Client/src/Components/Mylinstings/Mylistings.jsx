import React, { useState, useEffect } from 'react';
import { PiListBold } from "react-icons/pi";
import SingleListing from './SingleListing';
import { getUserListings } from "../../Api/Authapi";


async function fetchUserListings() {
    try {
        const response = await getUserListings();
        const { Listings } = response.data;
        return Listings
    } catch (error) {
        console.log('Error fetching user reviews:', error);
    }
}
export default function Mylistings() {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        async function loadListings() {
            const fetchedListings = await fetchUserListings();
            setListings(fetchedListings);
        }
        loadListings();
    }, []);

    return (
        <div>
            <div className='flex items-center' style={{ gap: '10px', margin: '25px 10px', borderBottom: '1px grey solid', paddingBottom: '5px' }}>
                <PiListBold />
                <h4>Listings</h4>
            </div>
            <div className="flex flex-wrap gap-4 justify-between">
                {listings.map((listing, index) => (
                    <div key={index} style={{ width: '49%' }}>
                        <div className="my-listing-item">
                            <SingleListing listing={listing} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}