import axios from 'axios';

const API_URL = 'http://localhost:5173'; // Change this according to your Node.js server's configuration

export const fetchLocations = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/locations`);
        return response.data;
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
};

export const fetchInventory = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/inventory`);
        return response.data;
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
};

export const fetchRenters = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/renters`);
        return response.data;
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
};

export const fetchInvetory = async () => {
    try {
        const response = await axios.get(`$http://localhost:5173/invetory`);
        return response.data;
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
};
