import { useState } from "react";
import StudentAPI from '../api/service';
import StudentTable from "./StudentTable";
import Form from "./Form";

const initialStudents = StudentAPI.all();

export default function StudTablComp() {
   const [students, setStudents] = useState(initialStudents);

   const delStud = (id) => {
      if (StudentAPI.delete(id)) {
         setStudents(students.filter((student) => student.id !== id));
      }
   };

   function addStud(id, name, group) {
      const newStudent = {
         id: id + 1,
         name: name,
         group: group
      };

      setStudents([...students, newStudent]);
   }

   return (
      <div className="student_table">
         <StudentTable students={students} delStudent={delStud} />
         <br />
         <Form addStudent={addStud} />
      </div>
   );
}
