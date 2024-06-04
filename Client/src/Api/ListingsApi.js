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
  console.log('oksowvnwicbwijcnwijcndfuobdfubefuvb')
  return api.get('/All')
}

export function GetMyListings () {
  return api.get('/MyListings')
}

export function DeleteListing (id) {
  return api.delete(`/delete/${id}`)
}


export default api;