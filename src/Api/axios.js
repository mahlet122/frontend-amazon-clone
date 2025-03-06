import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://amazon-api-deploy-55cw.onrender.com",
});
export { axiosInstance };
