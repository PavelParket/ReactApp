import axios from "axios";
import { signIn } from "../reducers/userReducer";
import store from "../store";

const API_URL = "http://localhost:8080/api";

const axiosInstance = axios.create({ baseURL: API_URL });

axiosInstance.interceptors.request.use(
   (config) => {
      const state = store.getState();
      const user = state.users.user;

      if (user.token) {
         config.headers.Authorization = `Bearer ${user.token}`;
      }

      return config;
   },

   (error) => {
      return Promise.reject(error);
   }
);

axiosInstance.interceptors.response.use(
   (response) => {
      return response;
   },

   async (error) => {
      const state = store.getState();
      const user = state.users.user;
      const originalRequest = error.config;

      if (error.response && error.response.status === 401 && !originalRequest._retry) {
         originalRequest._retry = true;

         try {
            const response = await axios.post(`${API_URL}/auth/refresh`, {
               longToken: user.longToken
            });
            const { token, longToken } = response.data;
            store.dispatch(signIn({ ...user, token, longToken }));

            originalRequest.headers.Authorization = `Bearer ${token}`;

            return axiosInstance(originalRequest);
         } catch (refreshError) {
            return Promise.reject(refreshError);
         }
      }

      return Promise.reject(error);
   }
);

export default axiosInstance;