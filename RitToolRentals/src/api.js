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
        const response = await axios.get(`${API_URL}/api/inventory`);
        return response.data;
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
};
export const addInventory = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/addItem`);
        return response.data;
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
};
export const getItem = async (itemID) => {
    try {
        const response = await axios.get(`${API_URL}/api/inventory/${itemID}`);
        return response.data;
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
};

export const getRenterItems = async (lender) => {
    try {
        const response = await axios.get(`${API_URL}/api/lenderInventory/${lender}`);
        return response.data;
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
};

export const updateItem = async (itemID, itemData) => {
    try {
        const response = await axios.put(`${API_URL}/api/inventory/${itemID}`, itemData);
        return response.data;
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
};

