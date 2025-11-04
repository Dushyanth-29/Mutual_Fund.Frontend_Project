import React, { useContext } from "react";
import { FundContext } from "../context/FundContext";

const FundsDashboard = () => {
  const { funds, loading } = useContext(FundContext);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading mutual funds...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>📈 Mutual Funds List</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "15px" }}>
        {funds.map((fund, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              background: "#f9f9f9",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}
          >
            <h3>{fund.name}</h3>
            <p>Type: {fund.type}</p>
            <p>Returns: {fund.returns}%</p>
            <p>Risk: {fund.risk}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FundsDashboard;
