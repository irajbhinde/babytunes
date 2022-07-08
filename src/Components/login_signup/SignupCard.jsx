import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../pages/Signup Page/signup-page.css";
import { useAuth } from "../context/auth-context";
import { useFormik } from "formik";
import axios from "axios";

export default function SignupCard() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const [passType, setPassType] = useState("password");
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (formik) => {
      signupHandler(
        formik.firstName,
        formik.lastName,
        formik.email,
        formik.password
      );
    },
  });
  const signupHandler = async (firstName, lastName, email, password) => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
      localStorage.setItem("token", response.data.encodedToken);
      setAuth({
        ...auth,
        authToken: response.data.encodedToken,
        authStatus: true,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup-container">
      <form
        className="flex_c form-container"
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <h2 className="signup-title">Signup</h2>
        <label className="signup-firstName" htmlFor="firstName">
          <p>First Name</p>
          <input
            id="firstName"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            type="text"
          />
        </label>
        <label className="signup-lastName" htmlFor="lastName">
          <p>Last Name</p>
          <input
            id="lastName"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            type="text"
          />
        </label>
        <label htmlFor="email" className="signup-email">
          <p>Email*</p>
          <input
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            type="email"
          />
        </label>
        <label htmlFor="password" className="signup-password">
          <p>Password*</p>
          <input
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            type={passType}
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
        <label htmlFor="cnfPassword" className="signup-cnfPassword">
          <p>Confirm Password*</p>
          <input
            id="confirmPassword"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            type={passType}
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
        <button
          disabled={
            formik.values.email === "" ||
            formik.values.password === "" ||
            formik.values.confirmPassword === "" ||
            formik.values.password !== formik.values.confirmPassword
          }
          type="submit"
          className="btn-createAccount"
        >
          Create Account
        </button>
        <Link to="/login">
          <p className="cursor-pointer">Already have an account ?</p>
        </Link>
      </form>
    </div>
  );
}
