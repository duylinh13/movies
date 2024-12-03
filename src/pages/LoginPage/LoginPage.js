import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import slider5 from "../../images/slider5.jpg";
import { AuthContext } from "../../App";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { logIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., calling an API to validate credentials)
    // For simplicity, we'll just check if the email and password are not empty
    if (email.trim() !== "" && password.trim() !== "") {
      // If the login is successful, navigate to the homepage
      logIn();
      navigate("/");
    } else {
      // If the login fails, you can show an error message or handle it as needed
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div style={{
      backgroundImage: `url(${slider5})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }} className="hero">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login">
            Login
          </button>
        </form>

        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
