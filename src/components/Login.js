import { useState } from "react";
import { Button, Grid2, Paper, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../reducers/userReducer";

function Login() {
   const dispatch = useDispatch();
   const userAccounts = useSelector(state => state.users.userAccounts)
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      setError('');

      if (userAccounts[username] && userAccounts[username].password === password) {
         dispatch(signIn(username))
      } else {
         setError('Invalid username or password');
      }
   };

   return (
      <Grid2 container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
         <Paper elevation={10} style={{ padding: 20, width: 300 }}>
            <Typography variant="h5" align="center" sx={{ marginBottom: 2 }}>Authorization</Typography>
            <form onSubmit={handleSubmit}>
               <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  sx={{ marginBottom: 2 }}
               />
               <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
               {error && <Typography color="error">{error}</Typography>}
               <Button type="submit" color="primary" variant="contained" fullWidth style={{ marginTop: 20 }}>
                  Sign in
               </Button>
            </form>
         </Paper>
      </Grid2>
   );
}

export default Login;
