import StudentTable from "./StudentTable";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent } from "../../reducers/studReducer";
//import useAuthCheck from "../../hooks/useAuthCheck";
//import { useEffect } from "react";

export default function StudTablComp() {
   const dispatch = useDispatch();
   const students = useSelector(state => state.students.students);
   //const isValidToken = useAuthCheck();

   /* useEffect(() => {
      isValidToken();
   },
      [isValidToken]
   ); */

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