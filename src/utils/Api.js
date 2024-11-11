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

export const getCategoryWithVideos = async () => {
    try {
           const token = localStorage.getItem("wishToken");
           console.log(token, "token");

      // const fullUrl = user_id
      //   ? `${BASE_URL}${url}/${user_id}`
      //   : `${BASE_URL}${url}`;
      // console.log(fullUrl, user_id, "fullUrl");

    const response = await axiosInstance.get(`/category/read/all`);
      return response;;
    } catch (error) {
      return error;
    }
}


export const getAudioApi = async () => {
    try {
           const token = localStorage.getItem("wishToken");
           console.log(token, "token");

      // const fullUrl = user_id
      //   ? `${BASE_URL}${url}/${user_id}`
      //   : `${BASE_URL}${url}`;
      // console.log(fullUrl, user_id, "fullUrl");

    const response = await axiosInstance.get(`/music/read/all`);
      return response;;
    } catch (error) {
      return error;
    }
}