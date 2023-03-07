import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL;

function searchMovie (param) {
    const promise = axios.get(`${baseURL}/movie/${param}`);
    return promise;
}

export const movikiAPI = {
    searchMovie
}
