import "./modal.css";
import "../../Utils/styles.css";
import {
  addToPlaylist,
  addVideoToPlaylist,
  deleteVideoFromPlaylist,
} from "../../Utils/videoPage-functions";
import { useState } from "react";
import { useAuth, useVideo, useFeatures } from "../context/index";
import { useNavigate } from "react-router-dom";

export const PlayListModal = () => {
  const { setModal } = useVideo();
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { authToken, authStatus } = auth;
  const { featureState, featureDispatch } = useFeatures();
  const { playlist, currentVideo } = featureState;
  const [playlistName, setPlaylistName] = useState("");

  const videoPresentInPlaylist = (playlist, currentVideo) => {
    return playlist.videos.find(
      (currentPlaylist) => currentPlaylist._id === currentVideo._id
    );
  };

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
        {playlist.length === 0 ? (
          <div>
            <p>No Playlists Created</p>
          </div>
        ) : (
          <div className="listOfPlaylist-container flex_c">
            {playlist.map((item) => {
              return (
                <>
                  <div className="modal-content flex_r">
                    <input
                      className="playlist-checkbox"
                      checked={videoPresentInPlaylist(item, currentVideo)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          addVideoToPlaylist(
                            item.title,
                            item._id,
                            currentVideo,
                            featureDispatch,
                            authToken
                          );
                        } else {
                          deleteVideoFromPlaylist(
                            item.title,
                            item._id,
                            currentVideo,
                            featureDispatch,
                            authToken
                          );
                        }
                      }}
                      type="checkbox"
                    />
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

export const CreateNewPlaylistModal = () => {
  const { setModal } = useVideo();
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { authToken, authStatus } = auth;
  const { featureDispatch } = useFeatures();
  const [playlistName, setPlaylistName] = useState("");
  return (
    <div className="playlist-modal">
      <div className="header flex_r">
        <p>Create a new Playlist</p>
        <i
          onClick={() => setModal(false)}
          className="fa-solid fa-xmark fa-lg"
        ></i>
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

export const HistoryPageModal = () => {
  const { setModal } = useVideo();
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { authToken, authStatus } = auth;
  const { featureDispatch } = useFeatures();
  const [playlistName, setPlaylistName] = useState("");
  return (
    <div className="playlist-modal">
      <div className="header flex_r">
        <p>Create a new Playlist</p>
        <i
          onClick={() => setModal(false)}
          className="fa-solid fa-xmark fa-lg"
        ></i>
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
