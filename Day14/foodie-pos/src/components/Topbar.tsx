import { useNavigate } from "react-router-dom";

export function Topbar() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const navigate =useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  }
  return (
    <div
      style={{
        backgroundColor: "#E63946",
        justifyContent: isLoggedIn ? "space-between" : "center",
        display: "flex",
        color: "#F1FAEE",
        padding: "0 10px",
      }}
    >
      {isLoggedIn ? <><h4>Foodie POS</h4>
      <h4>Sanchaung</h4>
      <h4 style={{ cursor: "pointer" }} onClick={handleLogout}>
        Logout
      </h4></> : <h4>Login</h4>}
    </div>
  );
}
