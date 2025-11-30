import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>

      <ul>
        <li>Overview</li>
        <li>My Investments</li>
        <li>Top Mutual Funds</li>
        <li>SIP Planner</li>
        <li>Profile</li>
      </ul>
    </div>
  );
}
