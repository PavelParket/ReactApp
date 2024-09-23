import './App.css';
import StudentAPI from './api/service';
import Table from './Table';
import { useState } from 'react';
import TicTacToe from './TicTacToe';
import Form from './Form';

function App() {
   const [students, setStudents] = useState(initialStudents);

   const delStud = (id) => {
      if (StudentAPI.delete(id)) {
         setStudents(students.filter((student) => student.id !== id));
      }
   };
   
   function addStud(name, group) {
      const newStudent = {
         id: StudentAPI.students.length + 1,
         name: name,
         group: group
      };

      StudentAPI.add(newStudent);
      setStudents([...students, newStudent]);
   }

   return (
      <>
         <div className='App'>
            <Table students={students} delStudent={delStud} />
            <br />
            <TicTacToe />
            <br />
            <br />
            <Form addStudent={addStud} />
         </div>
      </>
   );
}

const initialStudents = StudentAPI.all();

export default App;
