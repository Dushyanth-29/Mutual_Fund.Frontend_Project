import React, { createContext, useState } from "react";

export const FundContext = createContext();

export const FundProvider = ({ children }) => {
  const [funds, setFunds] = useState([
    { id: 1, name: "Axis Bluechip Fund", type: "Equity", risk: "Moderate", nav: 52.5, growth: 12 },
    { id: 2, name: "HDFC Short Term Fund", type: "Debt", risk: "Low", nav: 32.4, growth: 6 },
    { id: 3, name: "Mirae Emerging Fund", type: "Equity", risk: "High", nav: 68.1, growth: 18 },
  ]);

  const addFund = (fund) => setFunds([...funds, { id: Date.now(), ...fund }]);
  const deleteFund = (id) => setFunds(funds.filter((f) => f.id !== id));

  return (
    <FundContext.Provider value={{ funds, addFund, deleteFund }}>
      {children}
    </FundContext.Provider>
  );
};
