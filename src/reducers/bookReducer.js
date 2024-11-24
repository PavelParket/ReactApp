import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   /* books: [
      {
         id: 6,
         name: "The Hobbit",
         genre: "Fantasy",
         author: "J.R.R. Tolkien",
         isbn: "978-0-5479-2822-7",
         description: "A fantasy novel about the adventures of Bilbo Baggins."
      },
      {
         id: 7,
         name: "Fahrenheit 451",
         genre: "Dystopian",
         author: "Ray Bradbury",
         isbn: "978-1-4516-7331-9",
         description: "A novel about a future society where books are banned."
      },
      {
         id: 8,
         name: "Brave New World",
         genre: "Dystopian",
         author: "Aldous Huxley",
         isbn: "978-0-0608-5052-4",
         description: "A dystopian novel set in a technologically advanced future."
      }
   ], */
};

const bookSlice = createSlice({
   name: "book",
   initialState,
});

export default bookSlice.reducer