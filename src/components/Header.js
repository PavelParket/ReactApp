import { Button, Grid2 } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
   return (
      <header>
         <Grid2 container rowSpacing={1} columns={1}>
            <Grid2 size={1}>
               <Link to="/stud_tabl"><Button variant="outlined">Student Table</Button></Link>
            </Grid2>
            <Grid2 size={1}>
               <Link to="/tictactoe"><Button variant="outlined">TicTacToe</Button></Link>
            </Grid2>
            <Grid2 size={1}>
               <Link to="/login"><Button variant="outlined">Login</Button></Link>
            </Grid2>
         </Grid2>
      </header>
   );
}
