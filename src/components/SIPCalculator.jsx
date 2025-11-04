import React, { useState } from "react";

const SIPCalculator = () => {
  const [investment, setInvestment] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState(null);

  const calculateSIP = () => {
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    const maturity = investment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    setResult(maturity.toFixed(2));
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Monthly Investment (₹)"
        value={investment}
        onChange={(e) => setInvestment(e.target.value)}
      />
      <input
        type="number"
        placeholder="Expected Return (%)"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      />
      <input
        type="number"
        placeholder="Years"
        value={years}
        onChange={(e) => setYears(e.target.value)}
      />
      <button onClick={calculateSIP}>Calculate</button>

      {result && (
        <h4>Expected Value: ₹{result}</h4>
      )}
    </div>
  );
};

export default SIPCalculator;
