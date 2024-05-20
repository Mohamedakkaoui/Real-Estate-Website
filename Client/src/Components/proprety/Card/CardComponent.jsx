import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import CardWithImageSlider from './cards';
// import { fetchListingsFilter } from '../../../api/apiProprety'; // Import fetchListingsFilter

const CardWithImageLeft = ({ filteredListings, loading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [listing,setListings] = useState();
  const totalPages = Math.ceil((filteredListings?.length || 0) / itemsPerPage);

  // Handle page change event
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // useEffect(() => {
  //   const fetchListings = async () => {
  //     try {
  //       const response = await fetchListingsFilter(); 
  //       setListings(response.data);
  //     } catch (error) {
  //       console.error('Error fetching listing:', error);
  //     }
  //   };
  //   fetchListings();
  // }, []);

  // Get the listings for the current page
  const paginatedProperties = filteredListings
    ? filteredListings.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      )
    : [];

  return (
    <div className="w-full lg:w-3/5 p-0">
      <div className="mb-4 flex items-center justify-end">
        <div className="flex justify-center items-center flex-wrap">
          {loading ? (
            <p>Loading...</p>
          ) : (
            paginatedProperties.map((listing, index) => (
              <div key={index} className="m-4 w-96">
                <CardWithImageSlider
                  id={index}
                  title={listing.title}
                  price={listing.price}
                  images={listing.images}
                  listingType={listing.listingType}
                  location={listing.location}
                />
              </div>
            ))
          )}
        </div>
      </div>
      {/* Pagination controls */}
      <div className="flex justify-center items-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`bg-[#252836] hover:bg-orange-500 text-white font-bold py-2 px-4 rounded mr-2 ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <IoIosArrowBack />
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`bg-[#252836] hover:bg-orange-500 text-white font-bold py-2 px-4 rounded ml-2 ${
            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default CardWithImageLeft;
