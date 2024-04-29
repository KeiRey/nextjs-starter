import axios from "axios";
import ToastAlert from "./ToastAlert";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosInstance.interceptors.response.use(
    (response) => {
        if (response.status === 200) {
            return response;
        } else {
            ToastAlert.error(response.data.message || 'Failed to fetch data');
            return response;
        }
    },
    (error) => {
        ToastAlert.error(error.message || 'Failed to fetch data');
        return Promise.reject(error);
    },
);

export default axiosInstance;

