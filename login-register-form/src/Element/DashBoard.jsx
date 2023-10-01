import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Logo from "../image/logo.png"

const Dashboard = ({ onLogout }) => {
  const location = useLocation();

  const handleLogout = () => {
    onLogout();
  };

  // Check if the current location matches the navigation item
  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  // Check if the current location is in section 1
  const isInSection1 = location.pathname === "/home";

  return (
    <nav className={`navbar ${isInSection1 ? "" : "hidden"}`}>
      <div className="logo">
        <img src={Logo} alt="Logo" className="logo"/>
      </div>
      <ul className="center">
        <li>
          <Link to="/home" className={`nav-link ${isActive("/home")}`}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/menu" className={`nav-link ${isActive("/menu")}`}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="/about" className={`nav-link ${isActive("/about")}`}>
            About
          </Link>
        </li>
      </ul>

      <ul className="right">
        <li>
          <Link to="/cart" className={`nav-cart ${isActive("/cart")}`}>
            <FontAwesomeIcon icon={faCartPlus} />
            <span className="cart-label">Cart</span>
          </Link>
        </li>
        <li>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Dashboard;
