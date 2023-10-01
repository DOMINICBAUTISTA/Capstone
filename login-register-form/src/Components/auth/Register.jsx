import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ message: "", hasError: false });
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setIsRegistered(true);
        sendEmailVerification(auth.currentUser) // Send email verification
          .then(() => {
            console.log("Verification email sent.");
          })
          .catch((error) => {
            console.log("Error sending verification email:", error);
          });
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
            setError({ message: "Email is already in use.", hasError: true });
            break;
          case "auth/invalid-email":
            setError({ message: "Invalid email.", hasError: true });
            break;
          case "auth/weak-password":
            setError({
              message: "Your Password should be at least 6 characters.",
              hasError: true,
            });
            break;
          default:
            setError({
              message: "An error occurred while creating the account.",
              hasError: true,
            });
        }
        console.log(error);
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError({ message: "", hasError: false });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError({ message: "", hasError: false });
  };

  return (
    <div className="auth-form-container">
      <h2>Create Account</h2>
      {isRegistered && (
        <p className="success-message">
          You have been registered! A verification email has been sent to your email address.
        </p>
      )}
      {error.hasError && (
        <p className="error" style={{ color: "red" }}>
          {error.message}
        </p>
      )}
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={handleEmailChange}
          onFocus={handleEmailChange}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          className={error.hasError ? "error" : ""}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={handlePasswordChange}
          onFocus={handlePasswordChange}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          className={error.hasError ? "error" : ""}
          required
        />
        <button type="submit" className="create-account">Create Account</button>
      </form>
      <p className="login-here">Already have an account? <button className="back-btn" onClick={() => props.onFormSwitch("login")}>
        Log in here.
      </button></p>
    </div>
  );
};

export default Register;
