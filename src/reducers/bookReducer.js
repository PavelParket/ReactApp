import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   books: [
      {
         id: 1,
         name: "The Great Gatsby",
         genre: "Fiction",
         author: "F. Scott Fitzgerald",
         isbn: "978-0-7432-7356-5",
         description: "A novel about the American dream."
      },
      {
         id: 2,
         name: "1984",
         genre: "Dystopian",
         author: "George Orwell",
         isbn: "978-0-4515-2493-5",
         description: "A novel about totalitarianism and surveillance."
      },
      {
         id: 3,
         name: "To Kill a Mockingbird",
         genre: "Fiction",
         author: "Harper Lee",
         isbn: "978-0-0611-2008-4",
         description: "A novel about racial injustice in the Deep South."
      },
      {
         id: 4,
         name: "Pride and Prejudice",
         genre: "Romance",
         author: "Jane Austen",
         isbn: "978-0-1414-3951-8",
         description: "A romantic novel that critiques the British landed gentry."
      },
      {
         id: 5,
         name: "The Catcher in the Rye",
         genre: "Fiction",
         author: "J.D. Salinger",
         isbn: "978-0-3167-6948-8",
         description: "A story about teenage rebellion and alienation."
      },
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
   ],
};

const bookSlice = createSlice({
   name: "book",
   initialState,
});

export default bookSlice.reducer