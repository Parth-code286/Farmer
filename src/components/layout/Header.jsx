import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css"; 

export const Header = () => {
  const location = useLocation(); 

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Large Title */}
        <div className="logo-container">
  <img src="/uuull.jpeg" alt="OurFarmer Logo" className="logo-img" />
  <div className="logo">OurFarmer</div>
</div>

        {/* Navigation Links */}
        <ul className="nav-links">
          
          <li>
            <NavLink to="/about"  className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/live" className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}>
              Spot Price
            </NavLink>
          </li>
          <li>
            <NavLink to="/weather" className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}>
              Weather
            </NavLink>
          </li>
          <li>
            <NavLink to="/market" className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}>
              Market
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Login/Signup Buttons */}
        <div className="auth-buttons">
          <NavLink to="/login">
            <button className="login-btn">Login</button>
          </NavLink>
          <NavLink to="/signup">
            <button className="signup-btn">Sign Up</button>
          </NavLink>
        </div>
        <NavLink to="/chatbot">
          <button className="chatbotAPP">🤖</button>
        </NavLink>
      </div>
    </nav>
  );
};