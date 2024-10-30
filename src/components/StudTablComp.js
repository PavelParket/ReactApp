import StudentTable from "./StudentTable";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent } from '../actions/studActions';

export default function StudTablComp() {
   const dispatch = useDispatch();
   const students = useSelector(state => state.students.students);

   const handleDelete = (id) => {
      dispatch(deleteStudent(id));
   };

   return (
      <div className="student_table">
         <StudentTable students={students} delStudent={handleDelete} />
         <br />
         <Form />
      </div>
   );
}
