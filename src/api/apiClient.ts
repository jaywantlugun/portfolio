import axios from "axios";

// Default base URL (can be overridden per request)
const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", 
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor (e.g., add JWT token here in future)
apiClient.interceptors.request.use(
  (config) => {
    // Example: Add auth token
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor (handle errors globally)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized! Redirecting to login...");
      // redirect logic here if needed
    }
    return Promise.reject(error);
  }
);

export default apiClient;
