import axios from 'axios';

const API_URL = '/api/services/';

const getServices = async () => {
    try {
        const response = await axios.get(API_URL); // Corrected axios.get call
        return response.data;
    } catch (error) {
        console.error('Error fetching services:', error);
        throw error;
    }
};

export default getServices;


