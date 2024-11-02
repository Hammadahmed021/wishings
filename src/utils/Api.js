import axiosInstance from "./axiosInstance";

export const Signup = async (userData) => {
    console.log(userData, 'userData');

    try {
        const { token } = userData;
        const response = await axiosInstance.post(`auth/signup-login`, { token });
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
        const response = await axiosInstance.post(`auth/signup-login`, { token });
        return response.data;
    } catch (error) {
        console.error("API Login request failed:", error.response);
        throw error;
    }
};

export const Verify = async () => {
    const token = localStorage.getItem("wishToken")
    console.log(token, 'token');

    try {
        const response = await axiosInstance.get(`auth/verify`);
        return response.data;
    } catch (error) {
        console.error("API Login request failed:", error.response);
        throw error;
    }
};

export const Logout = async () => {
    try {
        const response = await axiosInstance.get(`auth/signout`);
        return response.data;
    } catch (error) {
        console.error("API Login request failed:", error.response);
        throw error;
    }
};