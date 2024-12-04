import axios from "axios"
import axiosInstance from "./interceptors";

const API_URL = "http://localhost:8080/api";

export const login = async (username, password) => {
   const response = await axios.post(`${API_URL}/auth/signin`, { username, password });
   return response.data;
};

export const getBooks = async () => {
   const response = await axios.get(`${API_URL}/book/public/all`);
   return response.data;
};

/* export const getBookById = async (id, token) => {
   const response = await axios.get(`${API_URL}/book/id=${id}`, {
      headers: {
         Authorization: `Bearer ${token}`
      }
   });
   return response.data;
}; */

export const getBookById = async (id) => {
   const response = await axiosInstance.get(`/book/id=${id}`);
   return response.data;
};

export const createBook = async (book, token) => {
   try {
      const response = await axios.post(`${API_URL}/book`, book, {
         headers: {
            Authorization: `Bearer ${token}`
         }
      });
      return response.data;
   } catch (error) {
      if (error.response?.status === 500) {
         throw new Error(error.response.data);
      }
      throw new Error("Error!");
   }
};

/* export const refreshToken = async (longToken) => {
   try {
      const response = await axios.get(``, {
         headers: {
            Authorization: `Bearer ${longToken}`
         }
      });
      return response.data;
   } catch (error) {
      throw error;
   }
} */