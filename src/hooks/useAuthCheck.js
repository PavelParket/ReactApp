import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "../reducers/userReducer";

export default function useAuthCheck() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const user = useSelector(state => state.users.user);

   const isValidToken = () => {
      if (user.tokenExpiry && Date.now() > user.tokenExpiry) {
         dispatch(signOut());
         navigate("/login");
      }
   };

   return isValidToken;
}