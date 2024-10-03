import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://hiring-staff-server.vercel.app",
});

export default axiosInstance;
