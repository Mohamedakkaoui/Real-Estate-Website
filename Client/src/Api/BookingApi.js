import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3500/booking",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});


export function GetMyBookings() {
  return api.get('/myBookings')
}


export default api;