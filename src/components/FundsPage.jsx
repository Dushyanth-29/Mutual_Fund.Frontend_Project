import React, { useEffect, useState } from "react";

function FundsPage() {
  const [funds, setFunds] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/funds")
      .then((res) => res.json())
      .then((data) => setFunds(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Explore Mutual Funds</h1>

      {funds.map((fund) => (
        <div
          key={fund.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            margin: "15px",
            borderRadius: "10px",
          }}
        >
          <h2>{fund.fundName}</h2>
          <p>NAV: ₹{fund.nav}</p>
          <p>Category: {fund.category}</p>
          <p>Risk: {fund.riskLevel}</p>
          <p>Returns: {fund.returnsPercentage}%</p>
        </div>
      ))}
    </div>
  );
}

export default FundsPage;