import { combineReducers } from "redux";
import studentReducer from "./studReducer";
import userReducer from "./userReducer";
import bookReducer from "./bookReducer";

const rootReducer = combineReducers({
   students: studentReducer,
   users: userReducer,
   books: bookReducer,
});

export default rootReducer;
