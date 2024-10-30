import { combineReducers } from "redux";
import studentReducer from "./studReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
   students: studentReducer,
   users: userReducer,
});

export default rootReducer;
