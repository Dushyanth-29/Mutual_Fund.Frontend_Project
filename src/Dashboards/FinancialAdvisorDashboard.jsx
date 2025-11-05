import React, { useContext } from "react";
import { FundContext } from "../context/FundContext";

const FinancialAdvisorDashboard = () => {
  const { funds } = useContext(FundContext);

  const recommendFunds = (riskLevel) => {
    return funds.filter((f) => f.risk.toLowerCase() === riskLevel.toLowerCase());
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Financial Advisor Dashboard</h2>
      <p>Recommendations based on investor risk appetite:</p>

      <div>
        <h3>Low Risk</h3>
        <ul>
          {recommendFunds("Low").map((f) => (
            <li key={f.id}>{f.name}</li>
          ))}
        </ul>

        <h3>Moderate Risk</h3>
        <ul>
          {recommendFunds("Moderate").map((f) => (
            <li key={f.id}>{f.name}</li>
          ))}
        </ul>

        <h3>High Risk</h3>
        <ul>
          {recommendFunds("High").map((f) => (
            <li key={f.id}>{f.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FinancialAdvisorDashboard;
