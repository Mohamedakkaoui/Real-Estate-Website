import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CardWithImageSlider from "./cards";
import { fetchListingsFilter } from '../../../Api/apiProprety';
import mapboxgl from 'mapbox-gl';

const CardWithImageLeft = ({ filteredlistings, loading }) => {
  const mapContainerRef = useRef(null);

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
    const newCoordinates = paginatedProperties.map(listing => [listing.longitude, listing.latitude]);
    setCoordinates(newCoordinates);
  }, [filteredlistings, setCoordinates, currentPage]);



  useEffect(() => {
    if (!coordinates || coordinates.length === 0) {
      return; // Don't initialize the map if coordinates are not available
    }
    mapboxgl.accessToken = 'pk.eyJ1IjoibGFpc3Nhb3VpOTkiLCJhIjoiY2x2b3pkazNrMDA1aTJrbzBmdXpyZm95eiJ9.pXWnyETUBt12-6flzNYCeQ'; // Replace with your access token

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-6, 32], // Initial center of the map
      zoom: 5
    });

    // Construct geojson from coordinates
    const geojson = {
      type: 'FeatureCollection',
      features: coordinates.map(coord => ({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: coord
        }
      }))
    };

    map.on('load', () => {
      map.loadImage(
        'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png',
        (error, image) => {
          if (error) throw error;
          map.addImage('custom-marker', image);
          map.addSource('points', {
            type: 'geojson',
            data: geojson
          });
          map.addLayer({
            id: 'points',
            type: 'symbol',
            source: 'points',
            layout: {
              'icon-image': 'custom-marker',
              'icon-size': 0.1,
              'icon-allow-overlap': true
            }
          });
        }
      );
    });

    return () => map.remove();

  }, [coordinates]);

  return (
    <>
      <div className="w-[60%] p-2">
        <div className="mb-4 flex justify-start">
          <div className="flex gap-4 flex-start items-center flex-wrap">
            {loading ? (
              <p>Loading...</p>
            ) : (
              paginatedProperties.map((listing, index) => (
                <div key={index} className="w-[49%]">
                  <CardWithImageSlider className="w-full"
                    id={index}
                    objectID={listing.Object_id}
                    title={listing.title}
                    price={listing.price}
                    images={listing.images}
                    listingType={listing.listingType}
                    location={listing.location}
                    city={listing.city}
                    rooms={listing.rooms}
                    bathrooms={listing.bathrooms}
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
      <div className="w-[40%]">
        <div ref={mapContainerRef} style={{ width: '100%', height: '80vh' }} />
      </div>
    </>
  );
};

export default CardWithImageLeft;
