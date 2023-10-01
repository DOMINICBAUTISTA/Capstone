import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Dashboard = ({ onLogout }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    onLogout();
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    // Perform search or filter results based on searchQuery value
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome to SuperTarpaulin Printing</h1>
      <p className="hashtag">SUPER FAST!! SUPER QUALITY!! SUPER BUDGET FRIENDLY!!</p>
      <nav className="navbar">
        <ul className="left">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/menu" className="nav-link">Menu</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li>
            <Link to="/service" className="nav-link">Service</Link>
          </li>
        </ul>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
        <ul className="right">
          <li>
            <Link to="/cart" className="nav-link">
              <FontAwesomeIcon icon={faCartPlus} />
              <span className="cart-label">Cart</span>
            </Link>
          </li>
          <li>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
