// src/api.js
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// Add a request interceptor to add the token to headers
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = token;
    }
    return config;
  },
  (error) => {
    // Handle the error appropriately
    return Promise.reject(error);
  }
);

// Auth API
export const registerUser = async (userData) => {
  try {
    return await API.post('/auth/register', userData);
  } catch (error) {
    throw new Error(error.response.data.message || 'Registration failed');
  }
};

export const loginUser = async (userData) => {
  try {
    return await API.post('/auth/login', userData);
  } catch (error) {
    throw new Error(error.response.data.message || 'Login failed');
  }
};

// Script API
export const createScript = async (scriptData) => {
  try {
    return await API.post('/scripts/create', scriptData);
  } catch (error) {
    throw new Error(error.response.data.message || 'Failed to create script');
  }
};

export const getScripts = async () => {
  try {
    return await API.get('/scripts');
  } catch (error) {
    throw new Error(error.response.data.message || 'Failed to fetch scripts');
  }
};
