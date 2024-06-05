import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CardWithImageSlider from "./cards";
import { fetchListingsFilter } from '../../../Api/apiProprety';
import MapVertical from "../mapComponent";



const CardWithImageLeft = ({ filteredlistings, loading }) => {
  const [coordinates, setCoordinates] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [listing, setListings] = useState();
  const totalPages = Math.ceil((filteredlistings?.length || 0) / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetchListingsFilter();
        setListings(response.data);
      } catch (error) {
        console.error('Error fetching listing:', error);
      }
    };
    fetchListings();
  }, []);


  const paginatedProperties = filteredlistings
    ? filteredlistings.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    )
    : [];
  useEffect(() => {
    const newCoordinates = paginatedProperties.map(listing => [listing.latitude, listing.longitude]);
    setCoordinates(newCoordinates);
  }, [filteredlistings, setCoordinates, currentPage]);

  return (
    <>
      <div className="w-[60%] p-2">
        <div className="mb-4 flex justify-start">
          <div className="flex gap-4 justify-center items-center flex-wrap">
            {loading ? (
              <p>Loading...</p>
            ) : (
              paginatedProperties.map((listing, index) => (
                <div key={index} className="w-[48%]">
                  <CardWithImageSlider className=""
                    id={index}
                    objectID = {listing.Object_id}
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
        <div className="flex justify-center items-end">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`bg-[#252836] hover:bg-[#FFA920] text-white font-bold py-2 px-4 rounded mr-2 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
          >
            <IoIosArrowBack />
          </button>
          <span>{currentPage}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`bg-[#252836] hover:bg-[#FFA920] text-white font-bold py-2 px-4 rounded ml-2 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
              }`}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <div className=" w-[40%]">
        <MapVertical coordinates={coordinates} />
      </div>
    </>
  );
};

export default CardWithImageLeft;
