import { combineReducers } from "redux";
import studentReducer from "./studReducer";
import userReducer from "./userReducer";
import bookReducer from "./bookReducer";
import apiSlice from "../api/apiSlice";

const rootReducer = combineReducers({
   students: studentReducer,
   users: userReducer,
   books: bookReducer,
   api: apiSlice.reducer
});

export default rootReducer;
