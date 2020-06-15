import axios from 'axios';
import { API_URL } from 'react-native-dotenv';

const api = axios.create({
  baseURL: API_URL//'http://192.168.1.10:3333'
});

export default api;