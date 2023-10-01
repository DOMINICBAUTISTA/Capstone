import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import ForgotPassword from './ForgotPassword';
import Register from './Register';

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setErrorMessage('');
        props.onLoginSuccess();
      })
      .catch((error) => {
        console.log(error);
        if (error.code === 'auth/user-not-found') {
          setErrorMessage('Email Invalid.');
        } else if (error.code === 'auth/wrong-password') {
          setErrorMessage('incorrect Email/Password, Please try again!');
        } else {
          setErrorMessage('An error occurred. Please try again later.');
        }
      });
  };

  const handleForgotPasswordClick = () => {
    setShowLoginForm(false);
    setShowForgotPasswordForm(true);
  };

  const handleBackToLoginClick = () => {
    setShowLoginForm(true);
    setShowForgotPasswordForm(false);
    setShowRegisterForm(false);
  };

  const handleRegisterClick = () => {
    setShowLoginForm(false);
    setShowRegisterForm(true);
  };


  return (
    <div className={`auth-form-container ${showLoginForm || showRegisterForm || showForgotPasswordForm? 'active' : ''}`}>
      {showLoginForm && !showRegisterForm && (
        <>
          <h2>Login</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" autoComplete="off" required />
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" autoComplete="off" required />
            <button className="forgot-btn" onClick={handleForgotPasswordClick}>forgot password?</button>
            <button type="submit" className="login">LogIn</button>
          </form>
          <p className="register-here">Don't have an account?<button className="reg-btn" onClick={() => handleRegisterClick()}>Register here.</button></p>
        </>
      )}
      {showRegisterForm && (
        <Register onFormSwitch={handleBackToLoginClick} />
      )}
      {showForgotPasswordForm && (
        <ForgotPassword onFormSwitch={handleBackToLoginClick} />
      )}
    </div>
  );
};

export default Login;
