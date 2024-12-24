import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }

    // console.log(config.headers);
    return config;
}, (error) => {
    return Promise.reject(error);
})

export default axiosInstance;

// Test comment (testing Git commit)