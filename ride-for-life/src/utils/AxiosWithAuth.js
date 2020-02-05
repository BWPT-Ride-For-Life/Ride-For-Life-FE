import axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios
        .create ({
            baseURL: "https://ride-for-life-bw.herokuapp.com/",
            headers: {
                Authorization: token
            }
        })
}