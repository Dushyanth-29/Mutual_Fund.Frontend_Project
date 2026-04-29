import React, { useEffect, useState } from "react";

function Fund() {
  const [funds, setFunds] = useState([]);

  useEffect(() => {
    fetch("https://mutual-fund-backend-project.onrender.com/api/funds")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);   // for checking
        setFunds(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Mutual Funds</h1>

      {funds.map((fund) => (
        <div
          key={fund.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
          }}
        >
          <h2>{fund.fundName}</h2>
          <p>Category: {fund.category}</p>
          <p>Risk: {fund.riskLevel}</p>
          <p>NAV: {fund.nav}</p>
          <p>Returns: {fund.returnsPercentage}%</p>
        </div>
      ))}
    </div>
  );
}

export default Fund;