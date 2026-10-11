import { Outlet } from "react-router-dom";
import Login from "./Login";

export default function PrivateRoutes() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return <div>{isLoggedIn ? <Outlet /> : <Login />}</div>;
}
