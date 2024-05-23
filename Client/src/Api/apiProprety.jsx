import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:3500',
    headers:{
        'Content-Type': 'application/json'
    }
})

export function fetchListings() {
    return api.get('/listings/All')
}

export function fetchListingsFilter(filterParams) {
    console.log(filterParams);
    return api.get('/listings/filteredListings',{ params: filterParams })
  
}


export default api