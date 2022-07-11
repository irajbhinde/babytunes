import "../Playlist Page/playlist-page.css";
import "../../Utils/styles.css";
import {
  Nav,
  PlaylistCard,
  PlayListModal,
  Sidebar,
  CreateNewPlaylistModal,
} from "../../Components";
import { useFeatures, useVideo } from "../../Components/context";
import { useNavigate } from "react-router-dom";

export default function PlaylistPage() {
  const { featureState, featureDispatch } = useFeatures();
  const { playlist } = featureState;
  const navigate = useNavigate();
  const { modal, setModal } = useVideo();

  return (
    <div className="playlistPage-wrapper">
      <Nav />
      <Sidebar />
      <div className="playlist-container">
        {playlist.length === 0 ? (
          <>
            {modal && (
              <div className="playlist-overlay">
                <CreateNewPlaylistModal />
              </div>
            )}
            <div className="create-playlist flex_r">
              <button
                onClick={() => {
                  setModal(true);
                }}
                className="btn-createPlaylist"
              >
                Create Playlist
              </button>
            </div>
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
          </>
        ) : (
          <div>
            {modal && (
              <div className="playlist-overlay">
                <CreateNewPlaylistModal />
              </div>
            )}
            <div className="create-playlist flex_r">
              <button
                onClick={() => {
                  setModal(true);
                }}
                className="btn-createPlaylist"
              >
                Create Playlist
              </button>
            </div>
            <div className="playlist">
              <PlaylistCard key={playlist._id} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
