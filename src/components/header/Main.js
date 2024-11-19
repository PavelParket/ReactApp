import { Navigate, Route, Routes } from "react-router-dom";
import "./headerCss/main.css";
import Login from "../body/Login";
import StudTablComp from "../body/StudTablComp";
import TicTacToe from "../body/TicTacToe";
import HomePage from "../body/HomePage";
import { useSelector } from "react-redux";
import BookList from "../body/BookList";
import Book from "../body/Book";
import AdminPage from "../body/AdminPage";

export default function Main() {
   const user = useSelector(state => state.users.user);

   return (
      <main>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
               path="/stud_tabl"
               element={user.loggedIn ? <StudTablComp /> : <Navigate to="/login" />}
            />
            <Route
               path="/tictactoe"
               element={user.loggedIn ? <TicTacToe /> : <Navigate to="/login" />}
            />
            <Route path="/book-list" element={<BookList />} />
            <Route path="/login" element={<Login />} />

            <Route
               path="/book/:id"
               element={user.loggedIn ? <Book /> : <Navigate to="/login" />}
            />
            <Route path="/admin" element={<AdminPage />}
            />
         </Routes>
      </main>
   );
}