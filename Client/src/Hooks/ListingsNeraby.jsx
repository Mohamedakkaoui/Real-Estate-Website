import React, { useEffect, useState } from "react";
import {  GetNerbyListings } from "../Api/ListingsApi";

function ListingsNeraby() {
  
  const [city, SetCity] = useState("");
  const [listings, SetListings] = useState([]);
  const [loading, SetLoading] = useState(false);
  const [error, SetError] = useState("");

  const findMyCity = () => {
    SetLoading(true);
    const URLKEY = "pk.bcce493f4966966ca1848757c690f42c"
    const success = (position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      console.log(position);

      const geoApiUrl = `https://us1.locationiq.com/v1/reverse?key=${URLKEY}&lat=${lat}&lon=${long}&format=json`;

      fetch(geoApiUrl)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const city = data.address.city;
          SetCity(city);
          fetchNearbyListings(city)
        })
        .catch((err) => {
          console.log("Error fetching geolcation data :", err);
          SetError("Error fetching location data");
          SetLoading(false);
        });
    };

    const error = (err) => {
      console.error("Geolocation error:", err.message);
      SetError("Error retrieving your location");
      SetLoading(false);
    };

    navigator.geolocation.getCurrentPosition(success, error);
  };

  const fetchNearbyListings = async (city) => {
    try {
      const res = await GetNerbyListings(city);
      SetListings(res.data.Listings);
      SetLoading(false);
    } catch (error) {
      console.error("Error fetching listings:", error);
      SetError("Error fetching listings");
      SetLoading(false);
    }
  };

  useEffect(() => {
    findMyCity()
  }, [])
  return { city, listings, loading, error };
}

export default ListingsNeraby;