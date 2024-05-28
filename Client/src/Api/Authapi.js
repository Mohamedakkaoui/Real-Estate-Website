import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3500",
  headers: {
    "Content-Type": "application/json",

  },
  withCredentials: true,
});

export function LoginUser(body) {
  return api.post("users/auth/login", body);
}

export function RegisterUser(body) {
  return api.post("users/auth/register", body);
}

export function VerifyEmail(email, token) {
  return api.get(`users/auth/verify?email=${email}&token=${token}`)
}

export function ResetPassword(body) {
  return api.post("users/auth/reset-password-email", body)
}


export function getUserById(id) {
  return api.get(`users/${id}`)
}


export function UpdatePassword(id, token, body) {
  return api.post(`users/auth/password-reset/${id}/${token}`, body)
}

//get user Reviews
export function getUserReviews() {
  return api.get(`reviews/userReviews`)
}


//get user listings
export function getUserListings() {
  return api.get(`listings/MyListings`)
}

//get all users 
export function getAllUsers() {
  return api.get(`users`)
}

//get all listings
export function getAllListings() {
  return api.get(`listings/All`)
}
//get all boookings
export function getAllBookings() {
  return api.get(`booking`)
}
//get all reviews
export function getAllReviews() {
  return api.get(`reviews`)
}

//fetch profile Data
export function fetchProfile() {
  return api.get(`users/Myprofile`)
}









export default api