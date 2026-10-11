import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <div style={{ height: "100vh"}}>
      <Topbar />
      <div style={{ display: "flex", height: "90%" }}>
        {isLoggedIn ? <Sidebar /> : null}
        {children}
      </div>
    </div>
  );
}
