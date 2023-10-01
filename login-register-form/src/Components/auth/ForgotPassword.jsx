import { useState } from "react";
import { auth } from "../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";


const ForgotPassword = ({ onFormSwitch }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email address");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => setMessage(`Password reset email sent to ${email}`))
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          setMessage("Email is not registered.");
        } else {
          setMessage(`Error: ${error.message}`);
        }
      });
  };

  const handleSwitchToLogin = (e) => {
    e.preventDefault();
    console.log("Switching to login form");
    onFormSwitch("login");
  };

  return (
    <div className="auth-form-container">
      <h2>Reset Password</h2>
      {message && <p className="success-message">{message}</p>}
      <form onSubmit={handleResetPassword} className="forgot-password-form">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="youremail@gmail.com"
          required
        />
        {emailError && <p className="error-message">{emailError}</p>}
        <button type="submit" className="reset-btn">Reset</button>
      </form>
      <p className="forgot-password">
        Remember your Password?{" "}
        <button onClick={handleSwitchToLogin}>
          Go back to Login
        </button>
      </p>
    </div>
  );
};

export default ForgotPassword;
