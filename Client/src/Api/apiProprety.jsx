import axios from "axios";

const token = document.cookie.split("=")[1];

const api = axios.create({
  baseURL: "http://localhost:3500",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  withCredentials: true,
});

export function fetchListings() {
  return api.get("/listings/All");
}

export function fetchListingsFilter(filterParams) {
  return api.get("/listings/filteredListings", { params: filterParams });
}
export async function getFavorites() {
  try {
    const response = await api.get('users/favorite');
    return response.data;
  } catch (error) {
    console.error("Error getting favorites:", error);
    throw error
  }
}
export const saveFavorite = async (userId, propertyId) => {
  try {
    const response = await api.put(`listings/favorites/${propertyId}`);
    return response.data;
  } catch (error) {
    console.error("Error saving favorite:", error);
    throw error;
  }
};

export default api;
