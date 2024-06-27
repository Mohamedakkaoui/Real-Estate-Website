import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3500/listings",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export function GetNerbyListings(city) {
  return api.get(`/NearbyListings/${city}`);
}

export function GetAllListings() {
  return api.get('/All')
}

//get listing by id
export function fetchSingleListing(id) {
  return api.get(`/${id}`)
}

//update listing
export function updateListing(id, data) {
  return api.patch(`/update/${id}`, data)
}

//save listing
export async function saveListing(id) {
  try {
    const response = await api.put(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error saving listing:", error);
    throw error;
  }
}

export function DeleteSaved(id) {
  return api.put(`/DeleteSaved/${id}`)
}

export function GetMyListings() {
  return api.get('/MyListings')
}

export function DeleteListing(id) {
  return api.delete(`/delete/${id}`)
}


export default api;