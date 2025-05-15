// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/items/'; // Adjust the URL based on your Django API endpoint

export const getItems = () => {
    return axios.get(API_URL);
};

export const createItem = (item) => {
    return axios.post(API_URL, item);
};

export const updateItem = (id, item) => {
    return axios.put(`${API_URL}${id}/`, item);
};

export const deleteItem = (id) => {
    return axios.delete(`${API_URL}${id}/`);
};
