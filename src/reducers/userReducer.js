import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   loggedInUser: null,
   userAccounts: {
      user1: { username: 'user1', password: 'password1' },
      user2: { username: 'user2', password: 'password2' },
      user3: { username: 'user3', password: 'password3' },
   },
};

const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      signIn(state, action) {
         state.loggedInUser = action.payload;
      },
      signOut(state) {
         state.loggedInUser = null;
      },
   },
});

export const { signIn, signOut } = userSlice.actions;

export default userSlice.reducer;