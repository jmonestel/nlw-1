import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://172.16.18.222:3333'
  baseURL: 'http://192.168.1.10:3333'
});

export default api;