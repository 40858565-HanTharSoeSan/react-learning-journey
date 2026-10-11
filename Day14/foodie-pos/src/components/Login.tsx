import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "./Layout";

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = () => {
    const isValid =
      user.email === "admin@gmail.com" && user.password === "admin123";
    if (!isValid) return alert("Invalid email or password");
    localStorage.setItem("isLoggedIn", "true");
    navigate("/"); //programmatically navigate to the desired page after successful login
  };
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            justifyContent: "center",
          }}
        >
          <input
            type="text"
            placeholder="Email"
            style={{ height: 30, width: 150 }}
            onChange={(evt) => setUser({ ...user, email: evt.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            style={{ height: 30, width: 150 }}
            onChange={(evt) => setUser({ ...user, password: evt.target.value })}
          />
          <button onClick={handleLogin} style={{ width: "fit-content" }}>
            Login
          </button>
        </div>
      </div>
    </Layout>
  );
}
