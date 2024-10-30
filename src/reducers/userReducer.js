import { SIGNIN, SIGNOUT } from "../actions/userActions";

const initialState = {
   loggedInUser: null,
   userAccounts: {
      user1: { username: 'user1', password: 'password1' },
      user2: { username: 'user2', password: 'password2' },
      user3: { username: 'user3', password: 'password3' },
   },
};

const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case SIGNIN:
         return { ...state, loggedInUser: action.payload };
      case SIGNOUT:
         return { ...state, loggedInUser: null };
      default:
         return state;
   }
};

export default userReducer;