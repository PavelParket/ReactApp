import { Route, Routes } from "react-router-dom";
import "./headerCss/main.css";
import Login from "../body/Login";
import StudTablComp from "../body/StudTablComp";
import TicTacToe from "../body/TicTacToe";
import HomePage from "../body/HomePage";
import { useSelector } from "react-redux";
import BookList from "../body/BookList";
import Book from "../body/Book";
import AdminPage from "../body/AdminPage";
import PrivateRoute from "../../hooks/PrivateRoute";

export default function Main() {
   const user = useSelector(state => state.users.user);

   return (
      <main>
         <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/book-list" element={<BookList />} />

            <Route path="/login" element={<Login />} />

            <Route path="/admin" element={<AdminPage />} />

            <Route element={<PrivateRoute user={user} redirectPath="/login" />}>
               <Route path="/stud-table" element={<StudTablComp />} />
               <Route path="/tictactoe" element={<TicTacToe />} />
               <Route path="/book/:id" element={<Book />} />
            </Route>
         </Routes>
      </main>
   );
}