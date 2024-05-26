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

export function GetAllListings () {
  return api.get('/All')
}


export default api;