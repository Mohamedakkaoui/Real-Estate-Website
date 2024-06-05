import React from 'react';
import { FaStar } from "react-icons/fa";


function StarRating({ rating }) {
    // Calculate the number of filled stars
    const filledStars = Math.floor(rating);

    // Generate an array of stars based on the rating
    const stars = Array.from({ length: 5 }, (_, index) => {
        if (index < filledStars) {
            return <span key={index}><FaStar color='#FFA920' /></span>; // Filled star
        } else {
            return <span key={index}><FaStar color='#E5E5E5' /></span>; // Empty star
        }
    });

    return (
        <div className="star-rating flex justify-end">
            {stars}
        </div>
    );
}

export default StarRating;
