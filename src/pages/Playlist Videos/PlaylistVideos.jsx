import { useFeatures } from "../../Components/context";
import "./playlist-videos.css";
import "../../Utils/styles.css";
import {
  Nav,
  PlaylistVideoCard,
  Sidebar,
  VideoListingCard,
} from "../../Components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function PlaylistVideos() {
  const { featureState, featureDispatch } = useFeatures();
  const { playlist } = featureState;
  const navigate = useNavigate();
  const { playlistId } = useParams();

  const getVideos = (playlist, playlistId) => {
    return playlist.find((item) => item._id === playlistId);
  };

  const selectedPlaylistVideos = getVideos(playlist, playlistId);
  const playlistVideos = selectedPlaylistVideos.videos;
  return (
    <div className="playlistVideos-wrapper">
      <Nav />
      <Sidebar />
      <div className="playlistVideos-container">
        {playlistVideos.length === 0 ? (
          <div className="center-container flex_c">
            <div className="empty-list-msg">No Videos in Your Playlist</div>
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
          <>
            <div className="playlistVideos">
              {playlistVideos.map((vids) => {
                return (
                  <PlaylistVideoCard
                    playlistId={playlistId}
                    video={vids}
                    key={vids._id}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
