import './App.css';
import StudentAPI from './api/service';
import StudentTable from './StudentTable';
import { useState } from 'react';
import TicTacToe from './TicTacToe';
import Form from './Form';

const initialStudents = StudentAPI.all();

function App() {
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
      <div className='App'>
         <StudentTable students={students} delStudent={delStud} />
         {/* <br />
         <TicTacToe />
         <br />
         <br />
         <Form addStudent={addStud} /> */}
      </div>
   );
}

export default App;
