import './App.css';
import StudentAPI from './api/service';
import StudentTable from './components/StudentTable';
import { useState } from 'react';
import Form from './components/Form';
import TicTacToe from './components/TicTacToe';

const initialStudents = StudentAPI.all();

const userAccounts = {
   user1: { username: 'user1', password: 'password1' },
   user2: { username: 'user2', password: 'password2' },
   user3: { username: 'user3', password: 'password3' },
};

function App() {
   const [students, setStudents] = useState(initialStudents);
   const [loggedInUser, setLoggedInUser] = useState(null);

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

   const handleLogin = (username) => {
      setLoggedInUser(username);
   }

   return (
      <div className='App'>
         <StudentTable students={students} delStudent={delStud} />
         <br />
         <Form addStudent={addStud} />
         <br />
         <TicTacToe />
      </div>
   );
}

export default App;
