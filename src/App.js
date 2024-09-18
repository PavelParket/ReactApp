import './App.css';
import StudentAPI from './api/service';
import Table from './Table';
import { useState } from 'react';

function App() {
  const [students, setStudents] = useState(initialStudents);

  const delStud = (id) => {
   if (StudentAPI.delete(id)) {
      setStudents(students.filter((student) => student.id !== id));
   }
  };

  return (
   <div className='App'>
      <Table students = {students} delStudent = {delStud} />
   </div>
  );
}

const initialStudents = StudentAPI.all();

export default App;
