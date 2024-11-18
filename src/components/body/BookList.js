import "./bodyCss/bookList.css"
import BookCard from "./BookCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBooks } from "../../api/api";

export default function BookList() {
   const [books, setBooks] = useState([]);
   const [error, setError] = useState(null);

   useEffect(() => {
      const printBooks = async () => {
         try {
            const books = await getBooks();
            setBooks(books);
         } catch (error) {
            setError("Failed to get books");
         }
      };

      printBooks();
   }, []);

   if (error) {
      return <p>{error}</p>;
   }

   if (!books) {
      return <p>Loading...</p>;
   }

   return (
      <div className="book-list-container">
         {books.length === 0 ? (
            <p>No book available.</p>
         ) : (
            books.map((book) => (
               <Link to={`/book/${book.id}`} key={book.id} className="book-card">
                  <BookCard book={book} />
               </Link>
            ))
         )}
      </div>
   );
}