import axios from "axios";

const api = axios.create({
  baseURL: "https://codeit-zogakzip-backend.onrender.com", // API의 기본 URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
