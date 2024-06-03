import React, { useEffect, useState } from 'react';
import FavsCard from './FavCard';
import { getFavorites } from '../../Api/apiProprety';

function Favorites({ userId }) {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const data = await getFavorites(userId);
                setFavorites(data);
            } catch (error) {
                console.error('Error fetching favorite properties:', error);
            }
        };

        fetchFavorites();
    }, [userId]);

    return (
        <>
            <div>
                <div className='flex items-center' style={{ gap: '10px', margin: '25px 10px', borderBottom: '1px grey solid', paddingBottom: '5px' }}>
                    <h4>Favorites</h4>
                </div>
                <div className="flex flex-wrap gap-4">
                    {favorites.map((property) => (
                        <FavsCard key={property._id} property={property} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Favorites;
