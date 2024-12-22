import axiosInstance from "./axiosInstance";

export const Signup = async (userData) => {
  console.log(userData, "userData");

  try {
    const { token, fname } = userData;
    const response = await axiosInstance.post(`auth/signup-login`, {
      token,
      fname,
    });
    localStorage.setItem("userData", JSON.stringify(response.data.user));
    console.log(response, "response >>>>signup");

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
    console.log("logi respose ", response.data);
    localStorage.setItem("userData", JSON.stringify(response.data.user));
    return response.data;
  } catch (error) {
    console.error("API Login request failed:", error.response);
    throw error;
  }
};

export const Verify = async () => {
  const token = localStorage.getItem("wishToken");
  console.log(token, "token");

  try {
    const response = await axiosInstance.get(`auth/verify`);
    localStorage.setItem("userData", JSON.stringify(response.data.user));
    console.log("lhdklhsdklhfksdhflksdhf", response.data);
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
    return response;
  } catch (error) {
    return error;
  }
};

export const getAudioApi = async () => {
  try {
    const token = localStorage.getItem("wishToken");
    console.log(token, "token");

    // const fullUrl = user_id
    //   ? `${BASE_URL}${url}/${user_id}`
    //   : `${BASE_URL}${url}`;
    // console.log(fullUrl, user_id, "fullUrl");

    const response = await axiosInstance.get(`/music/read/all`);
    return response;
  } catch (error) {
    return error;
  }
};

// Functions to fetch payment stripe payment intent
export const getPayment = async (paymentData) => {
  console.log("Booking object before API call:", paymentData);
  try {
    const response = await axiosInstance.post(
      `/stripe/create-payment-intent`,
      paymentData
    );
    console.log("API response:", response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error response data:", error.response.data);
      console.error("Error response status:", error.response.status);
      console.error("Error response headers:", error.response.headers);
    } else if (error.request) {
      console.error("Error request data:", error.request);
    } else {
      console.error("Error message:", error.message);
    }
    throw error;
  }
};

function getFileExtension(filename) {
  // Check if filename contains a dot
  if (filename.includes(".")) {
    // Split the filename at the last dot and return the extension
    return filename.substring(filename.lastIndexOf(".") + 1);
  }
  // If no dot is found, return null or an appropriate value
  return null;
}

// Functions to fetch payment stripe payment intent
export const placeOrderApi = async (paymentData) => {
  console.log("Booking object before API call:", paymentData);

  const userData = localStorage.getItem("userData");
  console.log("User data:", JSON.stringify(userData));

  try {
    const formData = new FormData();

    // Append key-value pairs to FormData
    for (const key in paymentData) {
      if (paymentData.hasOwnProperty(key)) {
        if (Array.isArray(paymentData[key]) && key !== "musics") {
          // Handle array data (excluding musics)
          paymentData[key].forEach((item, index) => {
            const fileToAppend = item?.file
              ? new File([item?.file], item?.file?.name, {
                  type: item?.file?.type,
                })
              : item;
            formData.append(`${key}[${index}]`, fileToAppend);
          });
        } else if (
          typeof paymentData[key] === "object" &&
          paymentData[key] !== null &&
          !(paymentData[key] instanceof File)
        ) {
          // Handle nested object (excluding File objects)
          formData.append(key, JSON.stringify(paymentData[key]));
        } else if (paymentData[key] instanceof File) {
          // Handle files (like scripts, images, etc.)
          formData.append(key, paymentData[key]);
        } else {
          // Append regular key-value pair (like strings or numbers)
          formData.append(key, paymentData[key]);
        }
      }
    }

    // Handle the 'musics' field for multiple audio files
    if (Array.isArray(paymentData.musics)) {
      paymentData.musics.forEach((music, index) => {
        const musicFile = new File([music.url], music.name, {
          type: "audio/mp3",
        });
        formData.append(`musics[${index}]`, musicFile);
      });
    }

    // Append user ID from local storage
    formData.append("user_id", JSON.parse(userData)?.id ?? 1);

    console.log(
      "FormData before API call:",
      Object.fromEntries(formData.entries())
    );

    // Make API call
    const response = await axiosInstance.post(`/order/create`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("API response:", response.data);
    return response;
  } catch (error) {
    if (error.response) {
      console.error("Error response data:", error.response.data);
      console.error("Error response status:", error.response.status);
      console.error("Error response headers:", error.response.headers);
    } else if (error.request) {
      console.error("Error request data:", error.request);
    } else {
      console.error("Error message:", error.message);
    }
    throw error;
  }
};

export const getAllOrdersApi = async () => {
  const token = localStorage.getItem("wishToken");
  console.log(token, "token");

  try {
    const response = await axiosInstance.get(`/user/orders`);
    return response;
  } catch (error) {
    console.error("API Login request failed:", error.response);
    throw error;
  }
};
export const getOrderDetailApi = async (id) => {
  const token = localStorage.getItem("wishToken");
  console.log(token, "token");

  try {
    const response = await axiosInstance.get(`/order/read/${id}`);
    return response;
  } catch (error) {
    console.error("API Login request failed:", error.response);
    throw error;
  }
};
