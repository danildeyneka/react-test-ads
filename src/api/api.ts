import axios from 'axios'

export const API = {
    getItems: () => {
        return axios.get('https://6075786f0baf7c0017fa64ce.mockapi.io/products')
            .then(res=>res.data)
    },
    getImages: () => {
        return axios.get('https://picsum.photos/v2/list?page=1&limit=100')
            .then(res=>res.data)
    }
}