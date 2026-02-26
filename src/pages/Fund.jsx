// src/pages/Funds.jsx
import React from "react";
import "./Funds.css";

const fundsData = [
  {
    id: 1,
    name: "Axis Bluechip Fund",
    type: "Equity",
    risk: "Moderate",
    nav: "₹52.5",
    returns: "14.2%",
  },
  {
    id: 2,
    name: "HDFC Short Term Fund",
    type: "Debt",
    risk: "Low",
    nav: "₹31.8",
    returns: "8.4%",
  },
  {
    id: 3,
    name: "Mirae Emerging Fund",
    type: "Equity",
    risk: "High",
    nav: "₹68.3",
    returns: "18.9%",
  },
];

function Funds() {
  return (
    <div className="funds-container">
      <div className="funds-header">
        <h1>Explore Mutual Funds</h1>
        <p>Handpicked insights for smarter investments</p>
      </div>

      <div className="funds-grid">
        {fundsData.map((fund) => (
          <div className="fund-card" key={fund.id}>
            <div className="fund-top">
              <h2>{fund.name}</h2>
              <span className={`risk-badge ${fund.risk.toLowerCase()}`}>
                {fund.risk}
              </span>
            </div>

            <div className="fund-details">
              <div>
                <p className="label">NAV</p>
                <h3>{fund.nav}</h3>
              </div>
              <div>
                <p className="label">Type</p>
                <h3>{fund.type}</h3>
              </div>
              <div>
                <p className="label">3Y Returns</p>
                <h3 className="returns">{fund.returns}</h3>
              </div>
            </div>

            <button className="invest-btn">Invest Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Funds;