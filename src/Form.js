import { useState } from "react"
import StudentAPI from "./api/service";

export default function Form({ addStudent }) {
   const [id, setId] =  useState(StudentAPI.students.length)
   const [name, setName] = useState("");
   const [group, setGroup] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      addStudent(id, name, group);
      setId(id + 1); setName(""); setGroup("");
   };

   return (
      <>
         <form onSubmit={handleSubmit}>
            <div>
               <label htmlFor="name">Name: </label>
               <input
                  type="text"
                  className="inputName"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required></input>
               <label htmlFor="group">Group: </label>
               <input
                  type="text"
                  className="inputGroup"
                  placeholder="Your group"
                  value={group}
                  onChange={(e) => setGroup(e.target.value)}
                  required></input>
               <button type="submit">Add</button>
            </div>
         </form>
      </>
   )
}
