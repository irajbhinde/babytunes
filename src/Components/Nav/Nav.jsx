import "./nav.css";
import "../../Utils/styles.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/index";

export default function Nav() {
  const { auth, setAuth } = useAuth();
  const { authStatus } = auth;
  const navigate = useNavigate();
  const signoutHandler = () => {
    localStorage.clear();
    setAuth({
      authToken: null,
      authStatus: false,
    });
    navigate("/");
  };
  return (
    <nav className="nav-bar">
      <Link to="/">
        <p className="nav-title">Baby Tunes</p>
      </Link>
      {authStatus ? (
        <div
          onClick={() => signoutHandler()}
          style={{ color: "var(--crimson-red)" }}
          className="flex_r avatar"
        >
          <p>Logout</p>
          <i className="fa-solid fa-right-to-bracket fa-lg"></i>
        </div>
      ) : (
        <Link
          className="flex_r avatar"
          style={{ color: "#00cc00" }}
          to="/login"
        >
          <p>Login</p>
          <i className="fa-solid fa-right-to-bracket fa-lg"></i>
        </Link>
      )}
    </nav>
  );
}
