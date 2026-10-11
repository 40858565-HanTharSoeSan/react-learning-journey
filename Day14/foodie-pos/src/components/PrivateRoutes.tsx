import { Navigate, Outlet } from "react-router-dom";
import Login from "./Login";

export default function PrivateRoutes() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
        return <Navigate to="/login"/>
    }
  return <Outlet /> ;
}
