import "./bodyCss/bookList.css"
import BookCard from "./BookCard";
import { Link } from "react-router-dom";
import { getBooks } from "../../api/api";
import { useQuery } from "react-query";

export default function BookList() {
   const { data: books, error, isLoading } = useQuery("books", getBooks, {
      staleTime: 60000,
      cacheTime: 300000,
   });

   if (isLoading) {
      return <p>Loading...</p>;
   }

   if (error) {
      return <p>Failed to get books</p>;
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