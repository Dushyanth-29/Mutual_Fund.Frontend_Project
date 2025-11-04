import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: "15px",
    backgroundColor: "#003366",
    color: "white",
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>Funds</Link>
      <Link to="/admin" style={{ color: "white", textDecoration: "none" }}>Admin</Link>
      <Link to="/investor" style={{ color: "white", textDecoration: "none" }}>Investor</Link>
      <Link to="/analyst" style={{ color: "white", textDecoration: "none" }}>Analyst</Link>
      <Link to="/advisor" style={{ color: "white", textDecoration: "none" }}>Advisor</Link>
    </nav>
  );
};

export default Navbar;
