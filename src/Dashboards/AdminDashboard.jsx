import React, { useState } from "react";
import "../styles/Admin.css";

function AdminDashboard() {
  const [funds, setFunds] = useState([
    { name: "Axis Bluechip Fund", type: "Equity", risk: "Moderate" },
    { name: "HDFC Short Term Fund", type: "Debt", risk: "Low" },
    { name: "Mirae Emerging Fund", type: "Equity", risk: "High" },
  ]);

  const [newFund, setNewFund] = useState({
    name: "",
    type: "",
    risk: "",
  });

  const handleAdd = () => {
    if (!newFund.name || !newFund.type || !newFund.risk) return;
    setFunds([...funds, newFund]);
    setNewFund({ name: "", type: "", risk: "" });
  };

  const handleDelete = (index) => {
    const updated = funds.filter((_, i) => i !== index);
    setFunds(updated);
  };

  return (
    <div className="admin-page">
      <div className="admin-container">
        <h1>Admin Dashboard</h1>

        {/* Add Fund Card */}
        <div className="admin-card">
          <h2>Add New Fund</h2>

          <div className="form-row">
            <input
              type="text"
              placeholder="Fund Name"
              value={newFund.name}
              onChange={(e) =>
                setNewFund({ ...newFund, name: e.target.value })
              }
            />

            <select
              value={newFund.type}
              onChange={(e) =>
                setNewFund({ ...newFund, type: e.target.value })
              }
            >
              <option value="">Select Type</option>
              <option>Equity</option>
              <option>Debt</option>
              <option>Hybrid</option>
            </select>

            <select
              value={newFund.risk}
              onChange={(e) =>
                setNewFund({ ...newFund, risk: e.target.value })
              }
            >
              <option value="">Select Risk</option>
              <option>Low</option>
              <option>Moderate</option>
              <option>High</option>
            </select>

            <button onClick={handleAdd} className="add-btn">
              Add Fund
            </button>
          </div>
        </div>

        {/* Fund List */}
        <div className="admin-card">
          <h2>Available Funds</h2>

          <div className="fund-list">
            {funds.map((fund, index) => (
              <div key={index} className="fund-item">
                <div>
                  <h3>{fund.name}</h3>
                  <p>
                    {fund.type} •{" "}
                    <span className={`risk ${fund.risk.toLowerCase()}`}>
                      {fund.risk}
                    </span>
                  </p>
                </div>

                <button
                  onClick={() => handleDelete(index)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;