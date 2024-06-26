// Favorites.jsx
import React, { useEffect, useState } from "react";
import FavsCard from "./FavCard";
import { getFavorites } from "../../Api/apiProprety";
import { FiHeart } from "react-icons/fi";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = async () => {
    try {
      const data = await getFavorites();
      console.log("Fetched favorites:", data);
      setFavorites(data.Listings);
    } catch (error) {
      console.error("Error fetching favorite properties:", error);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <div>
      <div
        className="flex items-center"
        style={{
          gap: "10px",
          margin: "25px 10px",
          borderBottom: "1px grey solid",
          paddingBottom: "5px",
        }}
      >
        <FiHeart />
        <h4>Favorites</h4>
      </div>
      <div className="flex flex-wrap gap-4">
        {favorites.map((property) => (
          <FavsCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
