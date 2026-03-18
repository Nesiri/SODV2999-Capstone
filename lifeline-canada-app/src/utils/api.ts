import axios, { type AxiosInstance } from 'axios';

// Base API URL
const API_BASE = ' http://localhost:3000'; //

// Axios instance with cookie support
const api: AxiosInstance = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // cookies are sent automaticall
});

export default api;
