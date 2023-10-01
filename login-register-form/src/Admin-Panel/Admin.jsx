import React from 'react';

const Admin = () => {
  return (
    <div className="admin-container">
      <div className="sidebar">
        <ul className="sidebar-nav">
          <li className="sidebar-nav-item">
            <a href="/dashboard">Dashboard</a>
          </li>
          <li className="sidebar-nav-item">
            <a href="/users">Users</a>
          </li>
          <li className="sidebar-nav-item">
            <a href="/products">Products</a>
          </li>
        </ul>
      </div>
      <div className="content">
      </div>
    </div>
  );
};

export default Admin;
