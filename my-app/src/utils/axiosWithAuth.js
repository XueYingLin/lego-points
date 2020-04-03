import axios from 'axios';

export const axiosWithAuth = () => {
    //we'll build this token to interact with the API
    //save the token to localStorage
    //Build a axiosWithAuth module to create an instance of axios with authentication header

    export const axiosWithAuth = () => {
        const token = JSON.parson(localStorage.getItem('token'));

        return axios.create({
            baseURL: 'http://localhost:5000',
            headers: {
                Authorization: token
            }
        });
    }
}