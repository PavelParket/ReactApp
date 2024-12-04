import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   students: [
      { id: 1, name: "Ben Blocker", group: "It-1" },
      { id: 2, name: "Dave Defender", group: "It-1" },
      { id: 3, name: "Sam Sweeper", group: "Tm-4" },
      { id: 4, name: "Matt Midfielder", group: "A-3" },
      { id: 5, name: "William Winger", group: "Dve-2" },
      { id: 6, name: "Fillipe Forward", group: "Dve-5" },
   ],
   maxId: 6,
};

const studentSlice = createSlice({
   name: "students",
   initialState,
   reducers: {
      addStudent(state, action) {
         const newStudent = {
            ...action.payload,
            id: state.maxId + 1
         };
         state.students.push(newStudent);
         state.maxId += 1;
      },

      deleteStudent(state, action) {
         state.students = state.students.filter(student => student.id !== action.payload);
      },
   },
});

export const { addStudent, deleteStudent } = studentSlice.actions;

export default studentSlice.reducer;