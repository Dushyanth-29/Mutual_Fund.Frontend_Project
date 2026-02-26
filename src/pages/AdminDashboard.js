import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import FundTable from "../components/FundTable";

export default function AdminDashboard() {
  const [funds, setFunds] = useState([
    { id: 1, name: "Axis Bluechip Equity", type: "Equity", risk: "Moderate" },
    { id: 2, name: "HDFC Short Term Debt", type: "Debt", risk: "Low" },
  ]);

  const deleteFund = (id) => {
    setFunds(funds.filter((item) => item.id !== id));
  };

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="main">
        <Topbar />
        <div className="card">
          <h3>Available Funds</h3>
          <FundTable funds={funds} deleteFund={deleteFund} />
        </div>
      </div>
    </div>
  );
}