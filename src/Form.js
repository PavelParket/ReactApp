import { useState } from "react"
import StudentAPI from "./api/service";
import { Autocomplete, Button, Container, FormControl, getOffsetLeft, InputLabel, OutlinedInput, Paper } from "@mui/material";

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
      <Container
         component='form'
         onSubmit={handleSubmit}
         sx={{
            border: 1,
            borderColor: '#B5F2FC',
            borderRadius: 2,
            backgroundColor: '#B5F2FC',
            display: "flex",
            alignItems: 'center',
         }}>
         <FormControl>
            <InputLabel htmlFor="component-name">Name</InputLabel>
            <OutlinedInput
               id="component-name"
               label="Name"
               value={name}
               onChange={(e) => setName(e.target.value)}
               required
               sx={{ backgroundColor: 'white' }}
            />
         </FormControl>
         <FormControl sx={{ marginLeft: 1 }}>
            <InputLabel htmlFor="component-group">Group</InputLabel>
            <OutlinedInput
               id="component-group"
               label="Group"
               value={group}
               onChange={(e) => setGroup(e.target.value)}
               required
               sx={{ backgroundColor: 'white' }}
            />
         </FormControl>
         <Button
            type="submit"
            variant="contained"
            sx={{
               width: 80,
               height: 45,
               marginLeft: 1,
               backgroundColor: '#6BF5C5',
               fontSize: 18
            }}
         >Add</Button>
      </Container>
   );
};
