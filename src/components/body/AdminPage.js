import { createBook } from "../../api/api";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function AdminPage() {
   const [success, setSuccess] = useState("");
   const [error, setError] = useState("");
   const [isSubmitted, setIsSubmitted] = useState(false);
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors }
   } = useForm();

   const onSubmit = async (data) => {
      const book = {
         name: data.name,
         genre: data.genre,
         description: data.description,
         author: data.author,
         isbn: data.isbn,
      };

      try {
         const newBook = await createBook(book);

         if (newBook) {
            reset();
            setIsSubmitted(false);
            setSuccess("Book successfully added!");
         }
      } catch (error) {
         setError(error.message);
      }
   };

   const handleInputChange = () => {
      if (success || error) {
         setSuccess("");
         setError("");
      }
   };

   return (
      <div className="form">
         <h2>Add Book</h2>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div>
               <div>
                  <label htmlFor="name">Name:</label>
                  <input
                     type="text"
                     {...register("name", { required: "Name is required" })}
                     onChange={handleInputChange}
                  />
                  {isSubmitted && errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
               </div>
               <div>
                  <label htmlFor="genre">Genre:</label>
                  <input
                     type="text"
                     {...register("genre", { required: "Genre is required" })}
                     onChange={handleInputChange}
                  />
                  {isSubmitted && errors.genre && <p style={{ color: 'red' }}>{errors.genre.message}</p>}
               </div>
               <div>
                  <label htmlFor="description">Description:</label>
                  <textarea
                     {...register("description", {
                        required: "Description is required",
                        maxLength: {
                           value: 255,
                           message: "Description must be at most 255 characters",
                        },
                     })}
                     onChange={handleInputChange}
                  />
                  {isSubmitted && errors.description && <p style={{ color: 'red' }}>{errors.description.message}</p>}
               </div>
               <div>
                  <label htmlFor="author">Author:</label>
                  <input
                     type="text"
                     {...register("author", { required: "Author is required" })}
                     onChange={handleInputChange}
                  />
                  {isSubmitted && errors.author && <p style={{ color: 'red' }}>{errors.author.message}</p>}
               </div>
               <div>
                  <label htmlFor="isbn">ISBN:</label>
                  <input
                     type="text"
                     inputMode="numeric"
                     {...register("isbn", {
                        required: "ISBN is required",
                        pattern: {
                           value: /^\d{13}$/,
                           message: "ISBN must have 13 numbers",
                        },
                     })}
                     onChange={handleInputChange}
                  />
                  {isSubmitted && errors.isbn && <p style={{ color: 'red' }}>{errors.isbn.message}</p>}
               </div>
               <button type="submit" onClick={() => setIsSubmitted(true)}>Add book</button>
            </div>
         </form>
         {success && <p style={{ color: 'green' }}>{success}</p>}
         {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
   );
};