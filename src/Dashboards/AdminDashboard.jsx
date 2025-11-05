import React, { useContext, useState } from "react";
import { FundContext } from "../context/FundContext";

const AdminDashboard = () => {
  const { funds, addFund, deleteFund } = useContext(FundContext);
  const [fund, setFund] = useState({ name: "", type: "", risk: "" });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Dashboard</h2>
      <input placeholder="Fund Name" onChange={(e) => setFund({ ...fund, name: e.target.value })} />
      <input placeholder="Type (Equity/Debt/Hybrid)" onChange={(e) => setFund({ ...fund, type: e.target.value })} />
      <input placeholder="Risk (Low/Moderate/High)" onChange={(e) => setFund({ ...fund, risk: e.target.value })} />
      <button onClick={() => addFund(fund)}>Add Fund</button>

      <h3>Available Funds</h3>
      {funds.map((f) => (
        <div key={f.id}>
          {f.name} - {f.type} ({f.risk}) <button onClick={() => deleteFund(f.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
