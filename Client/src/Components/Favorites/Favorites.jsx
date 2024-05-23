import React from 'react'
import FavsCard from './FavCard'

function Favorites() {
    return (
        <>
            <div>
                <div className='flex items-center ' style={{ gap: '10px', margin: '25px 10px', borderBottom: '1px grey solid', paddingBottom: '5px' }}
                >
                    <h4>Favorites</h4>
                </div>
                <div className="flex flex-wrap gap-4">
                    <FavsCard />
                    <FavsCard />
                    <FavsCard />
                    <FavsCard />
                    <FavsCard />
                    <FavsCard />
                    <FavsCard />
                    <FavsCard />
                </div>                </div>

        </>

    )
}

export default Favorites