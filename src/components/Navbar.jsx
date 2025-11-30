import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src="/logo192.png" alt="logo" style={{ height: "50px", marginRight: "10px" }} />
        <div>
          <h2 className="brand-name">MUTUAL FUND IQ</h2>
          <p className="tagline">SMART INSIGHTS FOR SMARTER INVESTMENTS</p>
        </div>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/funds">Funds</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/investor">Investor</Link>
        <Link to="/analyst">Analyst</Link>
        <Link to="/advisor">Advisor</Link>
      </div>
    </nav>
  );
};

export default Navbar;
