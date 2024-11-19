import { useState } from "react";
import { createBook } from "../../api/api";
import { useSelector } from "react-redux";

export default function AdminPage() {
   const user = useSelector(state => state.users.user);
   const [name, setName] = useState("");
   const [genre, setGenre] = useState("");
   const [description, setDescription] = useState("");
   const [author, setAuthor] = useState("");
   const [isbn, setIsbn] = useState("");
   const [error, setError] = useState(null);
   const [success, setSuccess] = useState(null);

   const handleSubmit = async (e) => {
      e.preventDefault();
      setError(null);
      setSuccess(null);

      if (!/^\d{13}$/.test(isbn)) {
         setError("ISBN must have 13 numbers!");
         return;
      }

      const book = {
         name,
         genre,
         description,
         author,
         isbn,
      };

      try {
         const newBook = await createBook(book, user.token);
         if (newBook) {
            setSuccess("Book successfully added!");
            setName("");
            setGenre("");
            setDescription("");
            setAuthor("");
            setIsbn("");
         }
      } catch (error) {
         setError(error.message);
      }
   };

   return (
      <div className="form">
         <h2>Add Book</h2>
         <form onSubmit={handleSubmit}>
            <div>
               <label htmlFor="name">Name:</label>
               <input
                  type="text"
                  label="Name"
                  value={name}
                  onChange={(name) => setName(name.target.value)}
                  required
               />
            </div>
            <div>
               <label htmlFor="genre">Genre:</label>
               <input
                  type="text"
                  label="Genre"
                  value={genre}
                  onChange={(genre) => setGenre(genre.target.value)}
                  required
               />
            </div>
            <div>
               <label htmlFor="description">Description:</label>
               <textarea
                  label="Description..."
                  maxLength={255}
                  value={description}
                  onChange={(description) => setDescription(description.target.value)}
                  required
               />
               <p>{(description && description.length) || 0}/255</p>
            </div>
            <div>
               <label htmlFor="author">Author:</label>
               <input
                  type="text"
                  label="Author"
                  value={author}
                  onChange={(author) => setAuthor(author.target.value)}
                  required
               />
            </div>
            <div>
               <label htmlFor="isbn">ISBN:</label>
               <input
                  type="text"
                  label="ISBN"
                  value={isbn}
                  onChange={(isbn) => setIsbn(isbn.target.value)}
                  required
               />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
            <button type="submit">Add book</button>
         </form>
      </div>
   );
};