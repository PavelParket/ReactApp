import axios from "axios"

const API_URL = "http://localhost:8080/api";

export const login = async (username, password) => {
   const response = await axios.post(`${API_URL}/auth/signin`, { username, password });
   return response.data;
}

export const getBooks = async () => {
   const response = await axios.get(`${API_URL}/book/public/all`);
   return response.data;
}

export const getBookById = async (id, token) => {
   const response = await axios.get(`${API_URL}/book/id=${id}`, {
      headers: {
         Authorization: `Bearer ${token}`
      }
   });
   return response.data;
}