import "./headerCss/header.css"
import logo from "./logo.svg"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../../reducers/userReducer";

export default function Header() {
   const dispatch = useDispatch();
   const loggedInUser = useSelector(state => state.users.loggedInUser);

   const handleSignOut = () => {
      dispatch(signOut());
   }

   return (
      <header>
         <div className="navbar">
            <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
            <nav>
               <ul className="links">
                  <li><Link to="/stud_tabl">Students Table</Link></li>
                  <li><Link to="/tictactoe">TicTacToe</Link></li>
                  <li><Link to="book-list/">Book List</Link></li>
                  {!loggedInUser && (
                     <li><Link to="/login">Sign In</Link></li>
                  )}
                  {loggedInUser && (
                     <li><Link to="/" onClick={handleSignOut}>Sign Out</Link></li>
                  )}
               </ul>
            </nav>
         </div>
      </header>
   );
}
