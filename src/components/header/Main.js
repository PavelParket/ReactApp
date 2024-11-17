import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../body/Login";
import StudTablComp from "../body/StudTablComp";
import TicTacToe from "../body/TicTacToe";
import HomePage from "../body/HomePage";
import { useSelector } from "react-redux";

export default function Main() {
   const loggedInUser = useSelector(state => state.users.loggedInUser);

   return (
      <main>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
               path="/stud_tabl"
               element={loggedInUser ? <StudTablComp /> : <Navigate to="/login" />}
            />
            <Route
               path="/tictactoe"
               element={loggedInUser ? <TicTacToe /> : <Navigate to="/login" />}
            />
            <Route path="/login" element={<Login />} />
         </Routes>
      </main>
   );
}
