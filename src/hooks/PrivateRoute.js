import { Navigate, Outlet } from "react-router-dom"

export default function PrivateRoute({ user, redirectPath }) {
   if (!user.loggedIn) {
      return <Navigate to={redirectPath} replace />;
   }

   return <Outlet />;
};