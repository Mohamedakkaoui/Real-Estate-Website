import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3500/users",
    withCredentials: true,

});

//upload profile pic
export function UploadUserPic(body) {
    return api.post("pic", body);
}

//update the user info
export function UpdateUser (body) {
    return api.put("/profile", body)
}

//Update password
export function UpdatePassword (body) {
    return api.put("/profile/change-password", body)
}

export function DeleteUser (id) {
    return api.delete(`/deletUser/${id}`)
}

export default api;