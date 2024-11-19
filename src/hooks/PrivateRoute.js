import { Navigate, Outlet } from "react-router-dom"

export default function PrivateRoute({ user, redirectPath }) {
   if (!user || !user.loggedIn) {
      return <Navigate to={redirectPath} replace state={{ from: window.location.pathname }} />;
   }

   return <Outlet />;
};