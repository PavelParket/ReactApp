import { combineReducers } from "redux";
import studentReducer from "./studReducer";

const rootReducer = combineReducers({
   students: studentReducer,
});

export default rootReducer;
