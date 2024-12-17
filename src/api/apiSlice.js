import { createApi } from "@reduxjs/toolkit/query/react";
import axiosInstance from "./interceptors";

const baseQuery = async (args, api, extraOptions) => {
   try {
      const result = await axiosInstance(args);
      return { data: result.data };
   } catch (axiosError) {
      let error = axiosError;
      if (error.response) {
         return { error: { status: error.response.status, data: error.response.data } };
      } else {
         return { error: { status: 500, data: error.message } };
      }
   }
};

const apiSlice = createApi({
   reducerPath: 'api',
   baseQuery,
   endpoints: (builder) => ({
      getBooks: builder.query({
         query: () => '/book/public/all',
         providesTags: ['Books'],
         staleTime: 60000,
         cacheTime: 300000,
      }),
      getBookById: builder.query({
         query: (id) => `/book/id=${id}`,
         providesTags: ['Books'],
         staleTime: 60000,
         cacheTime: 300000,
      }),
      addBook: builder.mutation({
         query: (newBook) => ({
            url: '/book',
            method: 'POST',
            data: newBook,
         }),
         invalidatesTags: ['Books'],
      }),
   }),
});

export const { useGetBooksQuery, useGetBookByIdQuery, useAddBookMutation } = apiSlice;
export default apiSlice;