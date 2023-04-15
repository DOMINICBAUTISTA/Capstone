import React from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ onLogout }) => {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  );
};

export default Dashboard;
