import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="home-wrapper">

      <div className="home-box">
        <h1 className="title">Welcome to Mutual Fund IQ</h1>
        <p className="subtitle">Login or Create Your Account</p>

        <div className="switch-buttons">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>

          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {/* LOGIN FORM */}
        {isLogin && (
          <div className="form-box">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button className="btn">Login</button>
          </div>
        )}

        {/* SIGNUP FORM */}
        {!isLogin && (
          <div className="form-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Create Password" />
            <button className="btn">Sign Up</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
