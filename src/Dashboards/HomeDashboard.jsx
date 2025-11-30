import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HomeDashboard.css";

const HomeDashboard = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Login attempted with Username: ${username}`);
    // Add backend login logic later
  };

  return (
    <div className="home-dashboard-container">
      <div className="login-card">
        <h2>MutualFund IQ - Home Dashboard</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>

        <div className="signup-link">
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
