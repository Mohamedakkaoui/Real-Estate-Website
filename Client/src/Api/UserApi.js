import axios from "axios";


const token = document.cookie.split('=')[1];



const api = axios.create({
    baseURL: "http://localhost:3500/users",
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,

    },
    withCredentials: true,

});

//upload profile pic
export function UploadUserPic(body) {
    return api.post("pic", body);
}

