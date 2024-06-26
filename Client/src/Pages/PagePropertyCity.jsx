import React, { useState, useEffect, } from "react";
import { useParams } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.css";
import "../Components/proprety/stylecss.css";
import { fetchListingsFilter, fetchListings } from "../Api/apiProprety";
import SearchFilters from "../Components/proprety/searchFilter";
import CardWithImage from "../Components/proprety/Card/CardComponent";
import MapVertical from "../Components/proprety/mapComponent";
import CardWithImageLeft from "../Components/proprety/Card/CardComponent";
import { GetAllListings } from "../Api/ListingsApi";
import Navbar from "../Components/Forum/NavBar";
import Footer from "../Components/Forum/Footer";
import PresetSearchFilters from "../Components/proprety/PresetSearchFilter";



const PropertyCity = () => {
    const { city } = useParams();
    const [filteredListings, setFilteredListings] = useState(null);
    const [loading, setLoading] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 1000000]);
    const [selectedStatus, setSelectedStatus] = useState("");
    const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function FetchCityListings() {
            try {
                console.log('hna');
                const listings = await handelSearch({
                    minPrice: priceRange[0],
                    maxPrice: priceRange[1],
                    selectedPropertyTypes,
                    selectedStatus,
                    search: city,
                })
                setFilteredListings(listings.data.Listings)
                console.log('hna', filteredListings);

            } catch (error) {
                console.error("Error fetching listings:", error);
            }
        }
        FetchCityListings();
    }, []);


    const handelSearch = async ({
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
            console.log("Filter Params:", {
                minPrice,
                maxPrice,
                selectedPropertyTypes,
                selectedStatus,
                search,
                startDate,
                endDate,
            });

            const response = await fetchListingsFilter({
                minPrice,
                maxPrice,
                selectedPropertyTypes,
                selectedStatus,
                search,
                startDate,
                endDate,
            });
            console.log('ha res', response);
            setFilteredListings(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error filtering listings:", error);
            setLoading(false);
        }
    };

    if (!filteredListings) {
        return (<div>Loading...</div>)
    }



    return (
        <>
            <Navbar />
            <div>
                <PresetSearchFilters city={city} onSearch={handelSearch} />
                <div className="flex h-screen">
                    {/* <div className=" w-[40%]">
          <MapVertical coordinates={coordinates} />
        </div> */}
                    <CardWithImageLeft className="" filteredlistings={filteredListings} loading={loading} />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PropertyCity;
