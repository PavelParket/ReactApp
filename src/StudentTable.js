import React from "react";
import { Paper, Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Button } from "@mui/material";

const StudentTable = ({ students, delStudent }) => {

   return (
      <TableContainer component={Paper}>
         <Table sx={{ width: 400 }} aria-label="simple table">
            <TableHead>
               <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Group</TableCell>
                  <TableCell align="center">Remove</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {students.map((student) => (
                  <TableRow key={student.id}>
                     <TableCell align="center">{student.name}</TableCell>
                     <TableCell align="center">{student.group}</TableCell>
                     <TableCell align="center">
                        <Button variant="contained" onClick={() => delStudent(student.id)}>Delete</Button>
                     </TableCell>

                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
};

export default StudentTable;
