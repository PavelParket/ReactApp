import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   user: {
      loggedIn: false,
      username: null,
      role: null,
      token: null,
      longToken: null,
   },
};

const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      signIn(state, action) {
         const { username, role, token, longToken } = action.payload;
         Object.assign(state.user, {
            loggedIn: true,
            username,
            role,
            token,
            longToken,
         });
      },
      signOut(state) {
         Object.assign(state.user, {
            loggedIn: false,
            username: null,
            role: null,
            token: null,
            longToken: null,
         });
      },
   },
});

export const { signIn, signOut } = userSlice.actions;

export default userSlice.reducer;