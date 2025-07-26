// src/axios.ts
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // Your backend base
  withCredentials: false,               // Set to true if using cookies (you're not)
});

export default instance;
