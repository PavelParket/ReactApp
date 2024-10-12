import './App.css';
import { useState } from 'react';
import Main from './components/Main';
import Header from './components/Header';

const userAccounts = {
   user1: { username: 'user1', password: 'password1' },
   user2: { username: 'user2', password: 'password2' },
   user3: { username: 'user3', password: 'password3' },
};

function App() {
   const [loggedInUser, setLoggedInUser] = useState(null);

   const handleLogin = (username) => {
      setLoggedInUser(username);
   }

   return (
      <div className='App'>
         <Header />
         <hr />
         <Main />
      </div>
   );
}

export default App;
