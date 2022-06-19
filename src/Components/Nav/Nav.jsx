import "./nav.css";
import "../../Utils/styles.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav class="nav-bar">
      <Link to="/">
      <p className="nav-title">Baby Tunes</p>
      </Link>
      <img
        class="avatar"
        src="https://endlessui.netlify.app/Images/avatar3.png"
        alt="avatar1"
      />
    </nav>
  );
}
