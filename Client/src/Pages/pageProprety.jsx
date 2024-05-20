import React, { useState, useEffect } from 'react';
 import '@fortawesome/fontawesome-free/css/all.css';
import '../Components/proprety/stylecss.css';
import { fetchListingsFilter,fetchListings } from '../api/apiProprety';
import SearchFilters from '../Components/proprety/searchFilter';
import CardWithImage from '../Components/proprety/Card/CardComponent';
import MapVertical from '../Components/proprety/mapComponent';
import CardWithImageLeft from '../Components/proprety/Card/CardComponent';
const YourPageComponent = () => {
  // Logique et état pour le composant principal
  const [filteredListings, setFilteredListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [priceRange, setPriceRange] = useState([0,1000000]);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
  const [search, setSearch] = useState('');
  const handleResponse = (response) => {
    setFilteredListings(response.data);
    setLoading(false);
  };
  useEffect(() => {
    const fetchAllListings = async () => {
      try {
        setLoading(true);
        const response = await fetchListings();
        setFilteredListings(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching listings:', error);
        setLoading(false);
      }
    };

    fetchAllListings();
  }, []);

  const handelSearch = async ({ minPrice, maxPrice, selectedPropertyTypes, selectedStatus, search,startDate,endDate }) => {
    try {
      setLoading(true);
      console.log("Filter Params:", { minPrice, maxPrice, selectedPropertyTypes, selectedStatus, search,startDate, endDate });
  
      const response = await fetchListingsFilter({ minPrice, maxPrice, selectedPropertyTypes, selectedStatus, search,startDate,endDate });
      
      console.log("API Response:", response.data);
  
      setFilteredListings(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error filtering listings:', error);
      setLoading(false);
    }
  };
  
  return (
    <div>
      {/* JSX pour le composant principal */}
      <SearchFilters onSearch={handelSearch}/>
      <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-2/5">
      <MapVertical/>
      </div>
      {/* <CardWithImage /> */}
      <CardWithImageLeft filteredListings={filteredListings} loading={loading} />

      </div>
      </div>
  );
};

export default YourPageComponent;

