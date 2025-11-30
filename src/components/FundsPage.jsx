import React, { useContext } from "react";
import { FundContext } from "../context/FundContext";
import "./FundsPage.css";

const FundsPage = () => {
  const { funds } = useContext(FundContext);

  return (
    <div className="funds-container">
      <h2 className="funds-title">Explore Mutual Funds</h2>
      <p className="funds-subtitle">Handpicked insights for smarter investments</p>

      <div className="fund-list">
        {funds.length === 0 ? (
          <p className="no-funds">No funds available. Add funds from Admin.</p>
        ) : (
          funds.map((fund, index) => (
            <div key={index} className="fund-card">
              
              <div className="fund-header">
                <div className="fund-icon">{fund.name.charAt(0)}</div>
                <div>
                  <h3 className="fund-name">{fund.name}</h3>
                  <p className="fund-category">{fund.category}</p>
                </div>
              </div>

              <div className="fund-details">
                <div>
                  <p className="label">NAV</p>
                  <p className="value">₹{fund.nav}</p>
                </div>
                <div>
                  <p className="label">Risk</p>
                  <p className="value risk">{fund.riskLevel}</p>
                </div>
                <div>
                  <p className="label">Returns (3Y)</p>
                  <p className="value return">{fund.returns3Y}%</p>
                </div>
              </div>

              <button className="invest-btn">Invest Now</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FundsPage;
