import axios from "axios";

const api = axios.create({
  baseURL: "https://to-do-app-jeym.onrender.com/api/auth",
  headers: {
    "Content-Type": "application/json",
  },
});

// Auto attach JWT
api.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const register = (formData) => api.post("/register", formData);
export const login = (formData) => api.post("/login", formData);