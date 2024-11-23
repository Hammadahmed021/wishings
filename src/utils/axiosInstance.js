// axiosInstance.js
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL, // Replace with your API base URL
  //timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('wishToken');
    if (token) config.headers['Authorization'] = `Bearer ${token}`;
    // config.headers['Custom-Header'] = 'CustomHeaderValue';
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
