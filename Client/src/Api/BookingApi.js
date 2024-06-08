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


export function GetMyBookingsDet() {
  return api.get('/myBookingsDetailed')
}


export function DeleteBooking(id) {
  return api.delete(`/delete/${id}`)
}

export function MyListingsBokings() {
  return api.get('/MylistingsBooking')
}



export function AddnewBooking (body) {
  return api.post('/new', body)
}
export default api;