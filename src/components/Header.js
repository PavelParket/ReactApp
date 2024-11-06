import { Button, Grid2 } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../reducers/userReducer";

export default function Header() {
   const dispatch = useDispatch();
   const loggedInUser = useSelector(state => state.users.loggedInUser);

   const handleSignOut = () => {
      dispatch(signOut());
   }

   return (
      <header>
         <Grid2 container>
            <Grid2 size={1} sx={{ width: 80, marginRight: 1 }}>
               <Link to="/"><Button variant="outlined">Home</Button></Link>
            </Grid2>
            <Grid2 size={1} sx={{ width: 150, marginRight: 1 }}>
               <Link to="/stud_tabl"><Button variant="outlined">Student Table</Button></Link>
            </Grid2>
            <Grid2 size={1}>
               <Link to="/tictactoe"><Button variant="outlined">TicTacToe</Button></Link>
            </Grid2>
            {!loggedInUser && (
               <Grid2 size={1}>
                  <Link to="/login"><Button variant="outlined">Sign in</Button></Link>
               </Grid2>
            )}
            {loggedInUser && (
               <Grid2 size={1}>
                  <Button
                     variant="outlined"
                     onClick={handleSignOut}
                     sx={{ color: "#ef5350", borderColor: "#ef5350" }}
                  >Sign out</Button>
               </Grid2>
            )}
         </Grid2>
      </header>
   );
}
