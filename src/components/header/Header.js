import "./headerCss/header.css"
import logo from "./headerCss/logo.svg"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../../reducers/userReducer";

export default function Header() {
   const dispatch = useDispatch();
   const user = useSelector(state => state.users.user);

   const handleSignOut = () => {
      dispatch(signOut());
   }

   return (
      <header>
         <div className="navbar">
            <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
            <nav>
               <ul className="links">
                  <li><Link to="/stud-table">Students Table</Link></li>
                  <li><Link to="/tictactoe">TicTacToe</Link></li>
                  <li><Link to="book-list/">Book List</Link></li>
                  {!user.loggedIn && (
                     <li><Link to="/login">Sign In</Link></li>
                  )}
                  {(user.role === "ADMIN") && (
                     <li><Link to="/admin">Admin</Link></li>
                  )}
                  {user.loggedIn && (
                     <li><Link to="/" onClick={handleSignOut}>Sign Out</Link></li>
                  )}
               </ul>
            </nav>
         </div>
      </header>
   );
}