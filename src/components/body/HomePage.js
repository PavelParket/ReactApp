import { Typography } from "@mui/material";
//import { useSelector } from "react-redux";

export default function HomePage() {
   //const user = useSelector(state => state.users.user);

   return (
      <div>
         <Typography variant="h4" align="center">
            Welcome to HomePage!
         </Typography>
         <Typography variant="body1" align="center">
            Please, choose anouwuther page
         </Typography>
      </div>
   );
}