import React, { useContext, useState } from "react";
import { FundContext } from "../context/FundContext";
import MutualFundChart from "./MutualFundChart";

const FundsPage = () => {
  const { funds } = useContext(FundContext);
  const [amount, setAmount] = useState(1000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);
  const [result, setResult] = useState(null);

  const calculateSIP = () => {
    const months = years * 12;
    const monthlyRate = rate / 12 / 100;
    const maturity =
      amount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    setResult(maturity.toFixed(2));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📈 Available Mutual Funds</h2>
      <ul>
        {funds.map((f) => (
          <li key={f.id}>
            <strong>{f.name}</strong> - {f.type} ({f.risk} Risk)
          </li>
        ))}
      </ul>

      <h3>💰 SIP Calculator</h3>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Monthly Investment" />
      <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="Expected Return (%)" />
      <input type="number" value={years} onChange={(e) => setYears(e.target.value)} placeholder="Years" />
      <button onClick={calculateSIP}>Calculate</button>
      {result && <p>Estimated Value: ₹{result}</p>}

      <h3>📊 Fund Distribution</h3>
      <MutualFundChart funds={funds} />
    </div>
  );
};

export default FundsPage;
