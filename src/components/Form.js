import { useState } from "react"
import { Button, Container, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../actions/studActions";

export default function Form() {
   const dispatch = useDispatch();
   const students = useSelector(state => state.students.students);
   const [name, setName] = useState("");
   const [group, setGroup] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();

      const newId = students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 1;

      const newStudent = {
         id: newId,
         name,
         group,
      };

      dispatch(addStudent(newStudent));
      setName("");
      setGroup("");
   };

   return (
      <Container
         component='form'
         onSubmit={handleSubmit}
         sx={{
            width: 500,
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
               sx={{ width: 150, backgroundColor: 'white' }}
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
               sx={{ width: 150, backgroundColor: 'white' }}
            />
         </FormControl>
         <Button
            type="submit"
            variant="contained"
            sx={{
               width: 80,
               height: 45,
               marginLeft: 3,
               backgroundColor: '#6BF5C5',
               fontSize: 18
            }}
         >Add</Button>
      </Container>
   );
};
