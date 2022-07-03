import "./modal.css";
import "../../Utils/styles.css";
import { addToPlaylist } from "../../Utils/videoPage-functions";
import { useState } from "react";
import { useAuth, useVideo, useFeatures } from "../context/index";
import { useNavigate } from "react-router-dom";

export const PlayListModal = () => {
  const { modal, setModal } = useVideo();
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { authToken, authStatus } = auth;
  const { featureState, featureDispatch } = useFeatures();
  const { playlistVideos } = featureState;
  const [playlistName, setPlaylistName] = useState("");
  console.log(playlistVideos);
  return (
    <div className="playlist-modal">
      <div className="header flex_r">
        <p>Save to...</p>
        <i
          onClick={() => setModal(false)}
          className="fa-solid fa-xmark fa-lg"
        ></i>
      </div>
      <div className="listOfPlaylist">
        {playlistVideos.length === 0 ? (
          <div>
            <p>Kuch Nahi hai yaha</p>
          </div>
        ) : (
          <div className="listOfPlaylist-container flex_c">
            {playlistVideos.map((item) => {
              return (
                <>
                  <div className="modal-content flex_r">
                  <input className="playlist-checkbox" type="checkbox" />
                  <p>{item.title}</p>
                  </div>
                </>
              );
            })}
          </div>
        )}
      </div>
      <div className="modal-footer">
        <input
          type="text"
          placeholder="Create a New Playlist"
          onChange={(e) => {
            setPlaylistName(e.target.value);
          }}
        />
        <button className="plus-icon">
          <i
            onClick={() => {
              authStatus
                ? addToPlaylist(playlistName, featureDispatch, authToken)
                : navigate("/login");
            }}
            className="fa-solid fa-plus fa-lg"
          ></i>
        </button>
      </div>
    </div>
  );
};
