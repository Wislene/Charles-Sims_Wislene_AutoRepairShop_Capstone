import axios from 'axios';

const API_URL = '/api/services/';

const getServices = async () => {
    const response = await axios.get(Add from deployment server here API_URL);
    return response.data;
