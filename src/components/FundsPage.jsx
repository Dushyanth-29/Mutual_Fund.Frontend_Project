import React from "react";
import FundCard from "./FundCard";
import SIPCalculator from "./SIPCalculator";

const fundsData = [
  { name: "Axis Bluechip Fund", type: "Equity", return: "14.3%" },
  { name: "HDFC Balanced Advantage Fund", type: "Hybrid", return: "12.5%" },
  { name: "SBI Small Cap Fund", type: "Equity", return: "18.9%" },
  { name: "ICICI Prudential Debt Fund", type: "Debt", return: "8.4%" },
];

const FundsPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Mutual Funds</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
        {fundsData.map((fund, index) => (
          <FundCard key={index} fund={fund} />
        ))}
      </div>

      <div style={{ marginTop: "40px" }}>
        <h3>SIP Calculator</h3>
        <SIPCalculator />
      </div>
    </div>
  );
};

export default FundsPage;
