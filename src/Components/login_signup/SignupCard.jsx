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
  const [userCredentials, setUserCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const signupHandler = async (userCredentials) => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: userCredentials.firstName,
        lastName: userCredentials.lastName,
        email: userCredentials.email,
        password: userCredentials.password,
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
          signupHandler(userCredentials);
        }}
      >
        <h2 className="signup-title">Signup</h2>
        <label className="signup-firstName" htmlFor="firstName">
          <p>First Name</p>
          <input
            id="firstName"
            name="firstName"
            value={userCredentials.firstName}
            onChange={(e) => {
              setUserCredentials({
                ...userCredentials,
                firstName: e.target.value,
              });
            }}
            type="text"
          />
        </label>
        <label className="signup-lastName" htmlFor="lastName">
          <p>Last Name</p>
          <input
            id="lastName"
            name="lastName"
            value={userCredentials.lastName}
            onChange={(e) => {
              setUserCredentials({
                ...userCredentials,
                lastName: e.target.value,
              });
            }}
            type="text"
          />
        </label>
        <label htmlFor="email" className="signup-email">
          <p>Email*</p>
          <input
            id="email"
            name="email"
            value={userCredentials.email}
            onChange={(e) => {
              setUserCredentials({ ...userCredentials, email: e.target.value });
            }}
            type="email"
          />
        </label>
        <label htmlFor="password" className="signup-password">
          <p>Password*</p>
          <input
            id="password"
            name="password"
            value={userCredentials.password}
            onChange={(e) => {
              setUserCredentials({
                ...userCredentials,
                password: e.target.value,
              });
            }}
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
            value={userCredentials.confirmPassword}
            onChange={(e) => {
              setUserCredentials({
                ...userCredentials,
                confirmPassword: e.target.value,
              });
            }}
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
            userCredentials.email === "" ||
            userCredentials.password === "" ||
            userCredentials.confirmPassword === "" ||
            userCredentials.password !== userCredentials.confirmPassword
          }
          type="submit"
          className="btn-createAccount"
        >
          Create Account
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setUserCredentials({
              firstName: "Raj",
              lastName: "Bhinde",
              email: "rajbhinde5@gmail.com",
              password: "Endless@205",
              confirmPassword: "Endless@205",
            });
          }}
          className="btn-autoFill"
        >
          Auto Fill
        </button>
        <Link to="/login">
          <p className="cursor-pointer">Already have an account ?</p>
        </Link>
      </form>
    </div>
  );
}
