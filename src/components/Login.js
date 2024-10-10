import { Button, Grid2, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";

function Login({ onLogin, userAccounts }) {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      setError('');

      if (userAccounts[username] && userAccounts[username].password === password) {
         onLogin(username);
      } else {
         setError('Invalid username or password');
      }
   };

   return (
      <Grid2 container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
         <Paper elevation={10} style={{ padding: 20, width: 300 }}>
            <Typography variant="h5" align="center">Authorization</Typography>
            <form onSubmit={handleSubmit}>
               <TextField 
                  label="Username" 
                  variant="outlined" 
                  fullWidth 
                  required 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
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
               <Button type="submit" color="primary" variant="contained" fullWidth style={{ marginTop: 10 }}>
                  Sign in
               </Button>
            </form>
         </Paper>
      </Grid2>
   );
}

export default Login;
