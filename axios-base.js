import axios from 'axios';
import { BACKEND_URL } from '@env';

const instance = axios.create({
  baseURL: BACKEND_URL,
});

instance.interceptors.request.use((request) => {
  console.info('Requests:', BACKEND_URL);
  return request;
});

export default instance;
