import React, { useContext, useState } from "react";
import { FundContext } from "../context/FundContext";

const InvestorDashboard = () => {
  const { funds } = useContext(FundContext);
  const [investments, setInvestments] = useState([]);

  const handleInvest = (fund) => {
    const amount = parseFloat(prompt(`Enter amount to invest in ${fund.name}:`));
    if (!amount || amount <= 0) return alert("Invalid amount!");
    const returnAmount = (amount * (1 + fund.growth / 100)).toFixed(2);
    setInvestments([...investments, { ...fund, amount, returnAmount }]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Investor Dashboard</h2>
      <h3>Available Funds</h3>
      <ul>
        {funds.map((f) => (
          <li key={f.id}>
            <strong>{f.name}</strong> — {f.type} ({f.risk} Risk) — NAV ₹{f.nav}
            <button onClick={() => handleInvest(f)}>Invest</button>
          </li>
        ))}
      </ul>

      <h3>Your Investments</h3>
      {investments.length === 0 ? (
        <p>No investments yet.</p>
      ) : (
        <ul>
          {investments.map((inv, i) => (
            <li key={i}>
              {inv.name}: ₹{inv.amount} → ₹{inv.returnAmount} (after 1 year)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InvestorDashboard;
