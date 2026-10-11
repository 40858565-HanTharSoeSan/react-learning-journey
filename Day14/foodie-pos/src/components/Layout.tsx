import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <div>
      <Topbar />
      <div style={{ display: "flex" }}>
        {isLoggedIn ? <Sidebar /> : null}
        {children}
      </div>
    </div>
  );
}
