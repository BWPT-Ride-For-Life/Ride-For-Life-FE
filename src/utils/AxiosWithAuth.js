import axios from 'axios'

export function getToken() {
    return localStorage.getItem('token')
}

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');


    return axios
        .create ({
            baseURL: "https://cors-anywhere.herokuapp.com/https://ride-for-life-bw.herokuapp.com/",
            headers: {
                Authorization: token
            }
        })
}