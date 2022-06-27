import { useState } from "react";
import "../../pages/login/login-page.css";
import { Link } from "react-router-dom";

export default function LoginCard() {
  const [passType, setPassType] = useState("password");
  return (
    <>
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <label className="input-email" htmlFor="email-id">
          <p>Email Address*</p>
          <input type="email" />
        </label>
        <label htmlFor="password" className="input-password">
          <p>Password*</p>
          <input type="password" />
          {passType === "text" ? (
          <i
            onClick={() =>
              setPassType((passType) =>
                passType === "password" ? "text" : "password"
              )
            }
            class="signup-pass-icon fa-solid fa-eye"
          ></i>
        ) : (
          <i
            onClick={() =>
              setPassType((passType) =>
                passType === "password" ? "text" : "password"
              )
            }
            class="signup-pass-icon fa-solid fa-eye-slash"
          ></i>
        )}
        </label>
        <div className="input-container flex_r">
          <span className="remember-me-checkbox flex_r">
            <input type="checkbox" name="" id="remember-me" />
            <label htmlFor="remember-me">Remember Me</label>
          </span>
          <p className="cursor-pointer">Forgot your password ?</p>
        </div>
        <button className="login-btn">Login</button>
        <button className="btn-guestLogin">Login as Guest</button>
        <Link to="/signup">
        <p className="cursor-pointer">Create a New Account &gt;</p>
        </Link>
      </div>
    </>
  );
}
