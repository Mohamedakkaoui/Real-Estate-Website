import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3500/reviews",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
})

export function getAllSiteReviews() {
  return api.get("/admin/Reviews");
}

// export function AddSiteReview(body) {
//   return api.post('/admin/AllReviews', body)
// }

export function DeleteSiteAdmin(id) {
  return api.delete(`/admin/Reviews/${id}`)
}

export default api