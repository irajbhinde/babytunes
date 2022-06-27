import { useState } from "react";
import { Link } from "react-router-dom";
import "../../pages/Signup Page/signup-page.css";


export default function SignupCard() {
  const [passType, setPassType] = useState("password");
  return (
    <div className="signup-container">
      <h2 className="signup-title">Signup</h2>
      <label className="signup-firstName" htmlFor="firstName">
        <p>First Name</p>
        <input type="text" />
      </label>
      <label className="signup-lastName" htmlFor="lastName">
        <p>Last Name</p>
        <input type="text" />
      </label>
      <label htmlFor="email" className="signup-email">
        <p>Email*</p>
        <input type="email" />
      </label>
      <label htmlFor="password" className="signup-password">
        <p>Password*</p>
        <input type={passType} />
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
      <label htmlFor="cnfPassword" className="signup-cnfPassword">
        <p>Confirm Password*</p>
        <input type={passType} />
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
      <button className="btn-createAccount">Create Account</button>
      <Link to="/login">
      <p className="cursor-pointer">Already have an account ?</p>
      </Link>
    </div>
  );
}
