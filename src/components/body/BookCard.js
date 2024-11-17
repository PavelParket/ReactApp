import "./bodyCss/bookCard.css"

export default function BookCard({ book }) {
   return (
      <div className="card">
         <div className="cover-image"></div>
         <div className="book-details">
            <h5 className="detail">Name: {book.name}</h5>
            <h5 className="detail">Genre: {book.genre}</h5>
            <h5 className="detail">Author: {book.author}</h5>
         </div>
      </div>
   );
}