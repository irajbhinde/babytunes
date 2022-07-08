import "../Playlist Page/playlist-page.css";
import "../../Utils/styles.css";
import { Nav, PlaylistCard, Sidebar } from "../../Components";
import { useFeatures } from "../../Components/context";
import { useNavigate } from "react-router-dom";

export default function PlaylistPage() {
  const { featureState, featureDispatch } = useFeatures();
  const { playlist } = featureState;
  const navigate = useNavigate();
  return (
    <div className="playlistPage-wrapper">
      <Nav />
      <Sidebar />
      <div className="playlist-container">
        {playlist.length === 0 ? (
          <div className="center-container flex_c">
            <div className="empty-list-msg">Your Playlist is Empty</div>
            <button
              onClick={() => {
                navigate("/");
              }}
              className="btn-explore"
            >
              Explore
            </button>
          </div>
        ) : (
          <div>
            <div className="playlist">
              <PlaylistCard key={playlist._id} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}