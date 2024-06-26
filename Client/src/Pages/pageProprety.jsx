import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "../Components/proprety/stylecss.css";
import { useLocation } from "react-router-dom";
import { fetchListingsFilter, fetchListings } from "../Api/apiProprety";
import SearchFilters from "../Components/proprety/searchFilter";
import CardWithImageLeft from "../Components/proprety/Card/CardComponent";
import Navbar from "../Components/Forum/NavBar";
import Footer from "../Components/Forum/Footer";

const Property = () => {
  const [filteredListings, setFilteredListings] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const propertyType = searchParams.get('propertyType');
  const status = searchParams.get('status');

  useEffect(() => {
    async function fetchProperties() {
      try {
        setLoading(true);
        let response;
        if (propertyType || status) {
          response = await fetchListingsFilter({
            selectedPropertyTypes: propertyType ? [propertyType] : [],
            selectedStatus: status || ''
          });
        } else {
          response = await fetchListings();
        }
        setFilteredListings(response.data.Listings || response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching listings:", error);
        setLoading(false);
      }
    }
    fetchProperties();
  }, [propertyType, status]);

  const handleSearch = async ({
    minPrice,
    maxPrice,
    selectedPropertyTypes,
    selectedStatus,
    search,
    startDate,
    endDate,
  }) => {
    try {
      setLoading(true);
      const response = await fetchListingsFilter({
        minPrice,
        maxPrice,
        selectedPropertyTypes,
        selectedStatus,
        search,
        startDate,
        endDate,
      });
      setFilteredListings(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error filtering listings:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!filteredListings || filteredListings.length === 0) {
    return <div>No properties found</div>;
  }

  return (
    <>
      <Navbar />
      <div>
        <SearchFilters onSearch={handleSearch} />
        <div className="flex h-screen">
          <CardWithImageLeft filteredlistings={filteredListings} loading={loading} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Property;
