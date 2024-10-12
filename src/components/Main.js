import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import StudTablComp from "./StudTablComp";
import TicTacToe from "./TicTacToe";

export default function Main() {
   return (
      <main>
         <Routes>
            <Route exact path="/stud_tabl" Component={StudTablComp} />
            <Route path="/tictactoe" Component={TicTacToe} />
            <Route path="/login" Component={Login} />
         </Routes>
      </main>
   );
}
