import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production'
    ? 'https://analisador-backend.onrender.com' // URL do backend hospedado
    : 'http://127.0.0.1:8000',                  // URL local para desenvolvimento
});

export default api;
