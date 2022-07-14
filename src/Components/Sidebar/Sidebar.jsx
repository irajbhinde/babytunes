import "./sidebar.css";
import "../../Utils/styles.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="side-bar">
      <Link to="/">
        <div>
          <i className="fa-solid fa-house fa-lg"></i>
          <span>Home</span>
        </div>
      </Link>
      <Link to="/likedvideos">
        <div>
          <i className="fa-solid fa-heart fa-lg"></i>
          <span>Liked Videos</span>
        </div>
      </Link>
      <Link to="/playlist">
        <div>
          <i className="fa-solid fa-list-check fa-lg"></i>
          <span>Playlist</span>
        </div>
      </Link>
      <Link to="/history">
        <div>
          <i className="fa-solid fa-clock-rotate-left fa-lg"></i>
          <span>History</span>
        </div>
      </Link>
      <Link to="/watchlater">
        <div>
          <i className="fa-regular fa-clock fa-lg"></i>
          <span>Watch Later</span>
        </div>
      </Link>
    </aside>
  );
}
