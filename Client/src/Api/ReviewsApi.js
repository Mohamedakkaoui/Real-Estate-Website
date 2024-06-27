import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3500/reviews",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// export function getAllReviews() {
//   return api.get("/");
// }

export function GetMYlistingReviews() {
  return api.get('/MylistingReviews')
}

//new review

export function addNewReview(data) {
  return api.post('/add', data)
}

// post review of our website
export const postReview = (data) => {
  return api.post('/admin/AllReviews', data);
};


export function DeleteReviewForAdmin(id) {
  return api.delete(`/admin/delete/${id}`)
}

export function DeleteReview (id) {
  return api.delete(`/delete/${id}`)
}

export default api;