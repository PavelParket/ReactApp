import { ADD_STUDENT, DELETE_STUDENT } from "../actions/studActions";

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

const studentReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_STUDENT:
         return {
            ...state,
            students: [...state.students, action.payload],
            maxId: Math.max(state.maxId, action.payload.id),
         };
      case DELETE_STUDENT:
         return {
            ...state,
            students: state.students.filter(student => student.id !== action.payload),
         };
      default:
         return state;
   }
};

export default studentReducer;
