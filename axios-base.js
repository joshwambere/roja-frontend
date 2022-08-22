import axios from 'axios';
import { BACKEND_URL } from '@env';

const instance = axios.create({
  baseURL: BACKEND_URL,
});

instance.interceptors.request.use((request) => {
  // console.log(request);
  return request;
});

export default instance;
