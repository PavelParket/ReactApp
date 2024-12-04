import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   user: {
      loggedIn: false,
      username: null,
      role: null,
      token: null,
      longToken: null,
      tokenExpiry: null,
   },
};

const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      signIn(state, action) {
         const { username, role, token, longToken, tokenExpiry } = action.payload;
         Object.assign(state.user, {
            loggedIn: true,
            username,
            role,
            token,
            longToken,
            tokenExpiry,
         });
      },
      signOut(state) {
         Object.assign(state.user, {
            loggedIn: false,
            username: null,
            role: null,
            token: null,
            longToken: null,
            tokenExpiry: null,
         });
      },
      isValidToken(state) {
         if (state.tokenExpiry && Date.now() > state.tokenExpiry) {
            Object.assign(state.user, {
               loggedIn: false,
               username: null,
               role: null,
               token: null,
               longToken: null,
            });
            state.tokenExpiry = null;
         }
      },
   },
});

export const { signIn, signOut, isValidToken } = userSlice.actions;

export default userSlice.reducer;