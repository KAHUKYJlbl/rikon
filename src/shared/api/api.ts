import axios, { AxiosInstance } from 'axios';

// import { getToken } from './token';

const BACKEND_URL = 'https://64985fe89543ce0f49e1f5d5.mockapi.io/api/';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  // api.interceptors.request.use(
  //   (config: InternalAxiosRequestConfig) => {
  //     const token = getToken();

  //     if (token && config.headers) {
  //       config.headers['x-token'] = token;
  //     }

  //     return config;
  //   },
  // );

  return api;
};
