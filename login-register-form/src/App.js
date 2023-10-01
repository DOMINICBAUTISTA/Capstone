import "./App.css";
import Login from "./Components/auth/Login";
import React, { useState } from "react";
import AuthDetails from "./Components/auth/AuthDetails";
import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";
import Dashboard from "./Element/DashBoard";
import Menu from "./Components/Menu";
import Cart from "./Components/Cart";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleAddToCart = (item) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index >= 0) {
      const newCartItems = [...cartItems];
      newCartItems[index].quantity += 1;
      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div className="App">
      <AuthDetails />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/dashboard" />
              ) : (
                <Login onLoginSuccess={handleLoginSuccess} />
              )
            }
          />
          <Route
            path="/dashboard"
            element={
              isLoggedIn ? (
                <>
                  {console.log("Rendering dashboard...")}
                  <Dashboard onLogout={handleLogout} setCartItems={setCartItems} />
                </>
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route path="/menu" element={<Menu onAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
