import React from "react";
import { FiHome, FiTrendingUp, FiUser, FiSettings } from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">MutualFundo</h2>

      <ul>
        <li><FiHome /> Dashboard</li>
        <li><FiTrendingUp /> Funds</li>
        <li><FiUser /> Users</li>
        <li><FiSettings /> Settings</li>
      </ul>
    </div>
  );
}