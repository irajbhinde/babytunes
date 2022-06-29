import { useState } from "react";
import "../../pages/login/login-page.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { useFormik } from "formik";
import axios from "axios";

export default function LoginCard() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const location = useLocation();
  let from = location.state?.from?.pathname;
  const [passType, setPassType] = useState("password");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (formik) => {
      loginHandler(formik.email, formik.password);
    },
  });

  const loginHandler = async (email, password) => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: email,
        password: password,
      });
      localStorage.setItem("token", response.data.encodedToken);
      setAuth({
        ...auth,
        authToken: response.data.encodedToken,
        authStatus: true,
      });
      if (from === undefined) {
        navigate("/");
      } else {
        navigate(from);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="login-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
          className="flex_c form-container"
        >
          <h2 className="login-title">Login</h2>
          <label className="input-email" htmlFor="email-id">
            <p>Email Address*</p>
            <input
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              type="email"
            />
          </label>
          <label htmlFor="password" className="input-password">
            <p>Password*</p>
            <input
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              type="password"
            />
            {passType === "text" ? (
              <i
                onClick={() =>
                  setPassType((passType) =>
                    passType === "password" ? "text" : "password"
                  )
                }
                className="signup-pass-icon fa-solid fa-eye"
              ></i>
            ) : (
              <i
                onClick={() =>
                  setPassType((passType) =>
                    passType === "password" ? "text" : "password"
                  )
                }
                className="signup-pass-icon fa-solid fa-eye-slash"
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
          <button type="submit" className="login-btn">
            Login
          </button>
          <button
            type="submit"
            onClick={() => {
              loginHandler("rajbhinde1@gmail.com", "Zain@205");
            }}
            className="btn-guestLogin"
          >
            Login as Guest
          </button>
          <Link to="/signup">
            <p className="cursor-pointer">Create a New Account &gt;</p>
          </Link>
        </form>
      </div>
    </>
  );
}
