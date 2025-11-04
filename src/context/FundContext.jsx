import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const FundContext = createContext();

export const FundProvider = ({ children }) => {
  const [funds, setFunds] = useState([]);     // To store mutual fund data
  const [loading, setLoading] = useState(true); // Loading state while fetching

  // ✅ Step 4 — Fetch data from API
  useEffect(() => {
    const fetchFunds = async () => {
      try {
        const response = await axios.get(
          "https://mocki.io/v1/2dcdfc74-93d9-4d5b-80e9-c6f1e66f7c2e"
        );
        setFunds(response.data);   // save API data to state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching funds:", error);
        setLoading(false);
      }
    };

    fetchFunds();
  }, []);

  return (
    <FundContext.Provider value={{ funds, loading }}>
      {children}
    </FundContext.Provider>
  );
};
