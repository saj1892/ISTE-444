import axios from 'axios';

const API_URL = 'http://localhost:5173'; // Change this according to your Node.js server's configuration

export const fetchData = async () => {
    try {
        const response = await axios.get(`${API_URL}/`);
        return response.data;
    } catch (error) {
        console.error('API call failed:', error);
        throw error;
    }
};
