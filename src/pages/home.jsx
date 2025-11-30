import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) return alert("Enter both email and password");

    if (email === "admin@gmail.com") navigate("/admin");
    else if (email === "investor@gmail.com") navigate("/investor");
    else if (email === "analyst@gmail.com") navigate("/analyst");
    else if (email === "advisor@gmail.com") navigate("/advisor");
    else if (email === "funds@gmail.com") navigate("/funds");
    else alert("No account found. Please Sign Up!");
  };

  return (
    <div className="home-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
