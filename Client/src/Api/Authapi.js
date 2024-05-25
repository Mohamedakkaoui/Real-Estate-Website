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

export function VerifyEmail (email, token) {
  return api.get(`users/auth/verify?email=${email}&token=${token}`)
}

export function ResetPassword (body) {
  return api.post("users/auth/reset-password-email", body)
}


export function UpdatePassword (id, token ,body) {
  return api.post(`users/auth/password-reset/${id}/${token}`, body)
}


export function getUserById(id) {
  return api.get(`users/${id}`)
}

export default api