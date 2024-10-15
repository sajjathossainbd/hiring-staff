import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://hiring-staff-server.vercel.app",
  // baseURL: "http://localhost:5000",
});

export default axiosInstance;
