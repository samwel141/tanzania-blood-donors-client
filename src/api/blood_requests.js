// api.js
import axios from 'axios';

const API_URL = 'https://dev-api-hazel.vercel.app/api'; 

export const getBloodRequests = async () => {
    try {
        const response = await axios.get(`${API_URL}/request_blood`);
        return response.data;
    } catch (error) {
        console.error("There was an error retrieving the blood requests!", error);
        throw error;
    }
};


export const getBloodSubmits = async () => {
    try {
        const response = await axios.get(`${API_URL}/submit_blood`);
        return response.data;
    } catch (error) {
        console.error("There was an error retrieving the blood requests!", error);
        throw error;
    }
};