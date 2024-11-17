import { useParams } from "react-router-dom";
import "./bodyCss/book.css"
import { useSelector } from "react-redux";

export default function Book() {
   const { id } = useParams();
   const books = useSelector(state => state.books.books);
   const book = books.find(b => b.id === parseInt(id));

   return (
      <div className="book-container">
         <div className="cover-image"></div>
         <div className="book-details">
            <h4 className="detail">Name: {book.name}</h4>
            <h4 className="detail">Genre: {book.genre}</h4>
            <h4 className="detail">Author: {book.author}</h4>
            <h4 className="detail">ISBN: {book.isbn}</h4>
         </div>
         <hr className="divider" />
         <p className="description">Description: {book.description}</p>
      </div>
   );
}