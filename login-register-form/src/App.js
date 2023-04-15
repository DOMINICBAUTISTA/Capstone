import "./App.css";
import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";
import React, { useState } from "react";
import AuthDetails from "./Components/AuthDetails";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Dashboard from "./Element/DashBoard";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <AuthDetails />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/dashboard" />
              ) : (
                <Login onFormSwitch={toggleForm} onLoginSuccess={handleLoginSuccess} />
              )
            }
          />
          <Route
            path="/dashboard"
            element={
              isLoggedIn ? (
                <>
                  {console.log("Rendering dashboard...")}
                  <Dashboard onLogout={handleLogout} />
                </>
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

