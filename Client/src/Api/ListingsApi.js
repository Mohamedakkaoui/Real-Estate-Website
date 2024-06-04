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
export function saveListing(id,) {
  return api.put(`${id}`,)
}



export default api;