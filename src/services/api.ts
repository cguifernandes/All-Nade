import axios from "axios";

export const db = axios.create({
    baseURL: '/api/clients'
});

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});