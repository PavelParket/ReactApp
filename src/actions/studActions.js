export const ADD_STUDENT = "ADD_STUDENT";
export const GET_ALL_STUDENTS = "GET_ALL_STUDENTS";
export const GET_STUDENT_BY_ID = "GET_STUDENT_BY_ID";
export const DELETE_STUDENT = "DELETE_STUDENT";

export const addStudent = (student) => ({
   type: ADD_STUDENT,
   payload: student,
});

export const deleteStudent = (id) => ({
   type: DELETE_STUDENT,
   payload: id,
});
