import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const Signup = async (userData) => {
    console.log(userData, 'userData');
    
    try {
        const { token } = userData;
        const response = await axios.post(`${BASE_URL}auth/signup-login`, {token});
        console.log(response, 'response >>>>signup');
        
        return response.data;
    } catch (error) {
        console.error("Signup request failed:", error.response || error.message);
        throw error;
    }
};

export const Login = async (userData) => {
    try {
        const { token } = userData;
        const response = await axios.post(`${BASE_URL}auth/signup-login`, token);
        return response.data;
    } catch (error) {
        console.error("API Login request failed:", error.response);
        throw error;
    }
};