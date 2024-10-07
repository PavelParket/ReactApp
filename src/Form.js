import { useState } from "react"
import StudentAPI from "./api/service";
import { Button, Container, FormControl, InputLabel, OutlinedInput } from "@mui/material";

export default function Form({ addStudent }) {
   const [id, setId] = useState(StudentAPI.students.length)
   const [name, setName] = useState("");
   const [group, setGroup] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      addStudent(id, name, group);
      setId(id + 1); setName(""); setGroup("");
   };

   return (
      <Container component="form" onSubmit={handleSubmit}>
         <FormControl>
            <InputLabel htmlFor="component-name">Name</InputLabel>
            <OutlinedInput
               id="component-name"
               label="Name"
               value={name}
               onChange={(e) => setName(e.target.value)}
               required
            />
         </FormControl>
         <FormControl>
            <InputLabel htmlFor="component-group">Group</InputLabel>
            <OutlinedInput
               id="component-group"
               label="Group"
               value={group}
               onChange={(e) => setGroup(e.target.value)}
               required
               sx={{ marginLeft: 1 }}
            />
         </FormControl>
         <Button
            type="submit"
            variant="contained"
            color="success"
            sx={{ width: 112, height: 56, marginLeft: 1 }}
         >Add</Button>
      </Container>
      /* <>
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
      </> */
   );
};
