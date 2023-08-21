import axios from "axios";

const axiosInstance = axios.create({
  // Your default configuration here
  baseURL: "https://stage.samriddhiframes.com/api",
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // You can modify the request config here (e.g., add headers)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // You can modify the response here before it's passed to the .then() handler
    return response;
  },
  (error) => {
    // Handle errors here
    return Promise.reject(error);
  }
);

export default axiosInstance;
