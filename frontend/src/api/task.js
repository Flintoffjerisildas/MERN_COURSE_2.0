import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/tasks",
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

export const createTask = (formData) => api.post("/create-task", formData);
export const getTasks = () => api.get("/get-tasks");
export const updateTask = (formData) => api.put("/update-task", formData);
export const deleteTask = (formData) => api.delete("/delete-task", { data: formData });

