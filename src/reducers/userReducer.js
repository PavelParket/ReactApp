import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   user: {
      loggedIn: false,
      username: null,
      role: null,
      token: null,
      tokenExpiry: null,
   },
};

const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      signIn(state, action) {
         const { username, role, token, tokenExpiry } = action.payload;
         Object.assign(state.user, {
            loggedIn: true,
            username,
            role,
            token,
            tokenExpiry,
         });
         /* state.user.loggedIn = true;
         state.user.username = username;
         state.user.role = role;
         state.user.token = token;
         state.user.tokenExpiry = tokenExpiry; */
      },
      signOut(state) {
         Object.assign(state.user, {
            loggedIn: false,
            username: null,
            role: null,
            token: null,
            tokenExpiry: null,
         });
         /* state.user.loggedIn = false;
         state.user.username = null;
         state.user.role = null;
         state.user.token = null;
         state.tokenExpiry = null; */
      },
      isValidToken(state) {
         if (state.tokenExpiry && Date.now() > state.tokenExpiry) {
            Object.assign(state.user, {
               loggedIn: false,
               username: null,
               role: null,
               token: null,
            });
            state.tokenExpiry = null;
            /* state.user.loggedIn = true;
            state.user.username = null;
            state.user.role = null;
            state.user.token = null;
            state.tokenExpiry = null; */
         }
      },
   },
});

export const { signIn, signOut, isValidToken } = userSlice.actions;

export default userSlice.reducer;