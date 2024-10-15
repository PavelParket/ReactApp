import { createContext, useContext, useMemo, useState } from "react";

export const userAccounts = {
   user1: { username: 'user1', password: 'password1' },
   user2: { username: 'user2', password: 'password2' },
   user3: { username: 'user3', password: 'password3' },
};

const LoginContext = createContext();

export const useLoginContext = () => {
   return useContext(LoginContext);
};

export const MyProvider = ({ children }) => {
   const [loggedInUser, setLoggedInUser] = useState(null);

   const onLogin = (username) => {
      setLoggedInUser(username);
   };

   const onLogout = () => {
      setLoggedInUser(null);
   }

   const value = useMemo(() => ({
      onLogin,
      onLogout,
      loggedInUser,
      userAccounts
   }), [loggedInUser]);

   return (
      <LoginContext.Provider value={value}>
         {children}
      </LoginContext.Provider>
   );
};