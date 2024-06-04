import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3500/reviews",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export function getAllReviews() {
  console.log("entered");
  return api.get("/");
}

export function GetMYlistingReviews() {
  return api.get('/MylistingReviews')
}

//new review

export function addNewReview(data) {
  return api.post('/add', data)
}




export default api;
