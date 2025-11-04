import React from "react";

const FundCard = ({ fund }) => {
  const cardStyle = {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
  };

  return (
    <div style={cardStyle}>
      <h3>{fund.name}</h3>
      <p>Type: {fund.type}</p>
      <p>Annual Return: {fund.return}</p>
    </div>
  );
};

export default FundCard;
