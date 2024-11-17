import React, { useState } from "react";
import { Paper, Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Button, Grid2 } from "@mui/material";
import CardInfo from "./CardInfo";

const StudentTable = ({ students, delStudent }) => {
   const [selectedStudent, setSelectedStudent] = useState(null);

   const selectStudent = (student) => {
      setSelectedStudent(student);
   };

   return (
      <TableContainer component={Paper} sx={{ backgroundColor: "#e0f2f1" }}>
         <Table sx={{ width: 400, float: "left", marginLeft: 7 }} aria-label="simple table">
            <TableHead>
               <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Group</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
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
                     <TableCell>
                        <Button variant="contained" onClick={() => selectStudent(student)} disabled={selectedStudent?.id === student.id}
                        >Info</Button>
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
         <Grid2 minWidth={150} maxWidth={250} sx={{ float: "right" }} marginRight={45} marginTop={10}>
            <Grid2 container display="flex" justifyContent="center" alignItems="center">
               {selectedStudent && <CardInfo student={selectedStudent} />}
            </Grid2>
         </Grid2>
      </TableContainer>
   );
}

export default StudentTable;
