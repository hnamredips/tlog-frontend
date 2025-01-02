import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { PATH_NAME } from "../../constants/pathname";
import useAuth from "../../components/hooks/useAuth";

const Login = () => {
    return (
        <div className="login">
          <div className="login-logo-container">
          </div>
          <div className="login-form-container">
            <h2>Welcome Back</h2>
            <p className="login-banner">Log In to Your Account!</p>
            <form >
              <div className="login-input-wrapper">
                <input
                  type="text"
                  placeholder="Username"
                  className="login-input-field"
                  required
                />
              </div>
              <div className="login-input-wrapper">
                <input
                  type="password"
                  placeholder="Password"
                  className="login-input-field"
                  required
                />
              </div>
              <div className="login-remember-me">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <button type="submit" className="login-btn sign-in">
                Sign In
              </button>
            </form>
          </div>
        </div>
      );
}

export default Login