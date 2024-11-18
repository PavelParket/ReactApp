import { useParams } from "react-router-dom";
import "./bodyCss/book.css"
import { useEffect, useState } from "react";
import { getBookById } from "../../api/api";
import { useSelector } from "react-redux";

export default function Book() {
   const { id } = useParams();
   const [book, setBook] = useState(null);
   const [error, setError] = useState(null);
   const user = useSelector(state => state.users.user);

   useEffect(() => {
      const printBook = async () => {
         try {
            const book = await getBookById(id, user.token);
            setBook(book);
         } catch (error) {
            setError("Book not found");
         }
      };

      printBook();
   }, [id, user.token]);

   if (error) {
      return <p>{error}</p>;
   }

   if (!book) {
      return <p>Loading...</p>;
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