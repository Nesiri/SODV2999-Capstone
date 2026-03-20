import axios, { type AxiosInstance } from 'axios';

// Base API URL
const API_BASE = import.meta.env.VITE_API_BASE;
console.log(import.meta.env);
console.log(import.meta.env.VITE_API_BASE);

// Axios instance with cookie support
const api: AxiosInstance = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // cookies are sent automaticall
});

export default api;
