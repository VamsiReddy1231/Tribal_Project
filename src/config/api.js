
import axios from 'axios';
// const DEPLOYED='https://e-commerce-server-production-0873.up.railway.app'
// const LOCALHOST='http://localhost:2024'

export const API_BASE_URL =  "https://tribalprojectbackend-production.up.railway.app"


const api = axios.create({
  baseURL: API_BASE_URL,
});

const token = localStorage.getItem('jwt');

api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
