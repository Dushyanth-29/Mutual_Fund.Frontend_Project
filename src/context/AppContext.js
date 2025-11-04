import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [funds, setFunds] = useState(() => {
    const saved = localStorage.getItem("funds");
    return saved ? JSON.parse(saved) : [];
  });

  // Fetch funds (API Integration)
  useEffect(() => {
    const fetchFunds = async () => {
      try {
        const response = await fetch("https://api.sampleapis.com/fakebank/accounts");
        const data = await response.json();
        setFunds(data.slice(0, 6)); // limit to 6 funds
      } catch (error) {
        console.error("API Error:", error);
      }
    };
    fetchFunds();
  }, []);

  // Save to localStorage (Data Persistence)
  useEffect(() => {
    localStorage.setItem("funds", JSON.stringify(funds));
  }, [funds]);

  return (
    <AppContext.Provider value={{ funds, setFunds }}>
      {children}
    </AppContext.Provider>
  );
};
