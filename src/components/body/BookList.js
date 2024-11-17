import { useSelector } from "react-redux";
import "./bodyCss/bookList.css"
import BookCard from "./BookCard";
import { Link } from "react-router-dom";

export default function BookList() {
   const books = useSelector(state => state.books.books);

   return (
      <div className="book-list-container">
         {books.map((book) => (
            <Link to={`/book/${book.id}`} key={book.id} className="book-card">
               <BookCard book={book} />
            </Link>
         ))}
      </div>
   );
}