import { useParams } from "react-router-dom";
import "./bodyCss/book.css"
import { useGetBookByIdQuery } from "../../api/apiSlice";

export default function Book() {
   const { id } = useParams();
   const { data: book, error, isLoading } = useGetBookByIdQuery(id);

   if (isLoading) {
      return <p>Loading...</p>;
   }

   if (error) {
      return <p>Book not found</p>;
   }

   return (
      <div className="book-container">
         <div className="cover-image"></div>
         <div className="book-details">
            <h4 className="detail">Name: {book.name}</h4>
            <h4 className="detail">Genre: {book.genre}</h4>
            <h4 className="detail">Author: {book.author}</h4>
            <h4 className="detail">ISBN: {book.formattedIsbn}</h4>
         </div>
         <hr className="divider" />
         <p className="description">Description: {book.description}</p>
      </div>
   );
}