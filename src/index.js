import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { FundProvider } from "./context/FundContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* FundProvider provides your global context */}
    <FundProvider>
      <App />
    </FundProvider>
  </React.StrictMode>
);
