import axios from "axios";

const apiInstance = axios.create({
  baseURL: "http://192.168.88.11:5000/api/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiInstance;
