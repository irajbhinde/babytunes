import "./cards.css";
import "../../Utils/styles.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useVideo, useAuth, useFeatures } from "../context/index";
import {
  addToWatchLater,
  deleteFromWatchLater,
  deleteFromPlaylist,
  deleteVideoFromPlaylist,
  addToLikedVideos,
  deleteFromLikedVideos,
  addVideoToHistory,
  deleteVideoFromHistory,
} from "../../Utils/videoPage-functions";
import { PlayListModal } from "../index";
import ReactPlayer from "react-player";

export const CategoryCard = ({ navigationByCategory, category }) => {
  const { categoryName, _id, image } = category;
  return (
    <>
      <Link to="/videolisting">
        <div
          key={_id}
          onClick={() => navigationByCategory(categoryName)}
          className="card"
        >
          <img className="category-img" src={image} alt="error" />
          <p>{categoryName}</p>
        </div>
      </Link>
    </>
  );
};

export const VideoListingCard = ({ video }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { authToken, authStatus } = auth;
  const { featureState, featureDispatch } = useFeatures();
  const { watchLaterVideos } = featureState;
  const { modal, setModal } = useVideo();
  const { _id, title } = video;
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <div key={_id} className="videolisting-cards">
        <img
          onClick={() => {
            featureDispatch({ type: "SET_VIDEO", payload: video });
            addVideoToHistory(video, featureDispatch, authToken);
            navigate(`/video/${_id}`);
          }}
          className="videolisting_img"
          src="https://i.ytimg.com/vi/f013dR_y7DI/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLCmmUMogcnMu2KFfSuEnC-AN0plmw"
          alt="error"
        />
        <span className="videolisting-content">
          <p className="flex_r flex1">{title}</p>
          <i
            onClick={() => {
              modalActive ? setModalActive(false) : setModalActive(true);
            }}
            className="fa-solid fa-xl fa-ellipsis-vertical kebab-menu"
          ></i>
        </span>
        {modalActive && (
          <div className="modal flex_c">
            {watchLaterVideos.find((vid) => vid._id === video._id) ? (
              <>
                <div
                  onClick={() =>
                    deleteFromWatchLater(video, featureDispatch, authToken)
                  }
                  className="modalTextOne flex_r"
                >
                  <i
                    style={{ color: "var(--crimson-red)" }}
                    className="fa-regular fa-clock fa-sm"
                  ></i>
                  <p style={{ color: "var(--crimson-red)" }}>
                    Remove from Watch Later
                  </p>
                </div>
              </>
            ) : (
              <>
                <div
                  onClick={() => {
                    authStatus
                      ? addToWatchLater(video, featureDispatch, authToken)
                      : navigate("/login");
                  }}
                  className="modalTextOne flex_r"
                >
                  <i className="fa-regular fa-clock fa-sm"></i>
                  <p>Add to Watch Later</p>
                </div>
              </>
            )}
            <div
              onClick={() =>
                authStatus
                  ? (setModal(!modal),
                    featureDispatch({ type: "SET_VIDEO", payload: video }))
                  : navigate("/login")
              }
              className="modalTextTwo flex_r"
            >
              <i className="fa-solid fa-list-check fa-sm"></i>
              <p>Add to Playlist</p>
            </div>
          </div>
        )}
        {modal && (
          <>
            <div className="playlist-overlay">
              <PlayListModal video={video} key={video._id} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export const PlaylistCard = () => {
  const { featureState, featureDispatch } = useFeatures();
  const { auth } = useAuth();
  const { authToken } = auth;
  const { playlist } = featureState;
  const navigate = useNavigate();
  return (
    <>
      {playlist.map((playlistName) => (
        <div className="playlist-card">
          <div className="deletePlaylist">
            <i
              onClick={() =>
                deleteFromPlaylist(playlistName, featureDispatch, authToken)
              }
              class="fa-solid fa-trash cursor-pointer"
            ></i>
          </div>
          <div
            onClick={() => {
              navigate(`/playlist/${playlistName._id}`);
            }}
            className="playlist-card-overlay cursor-pointer"
          >
            <i class="fa-solid fa-play"></i>
          </div>
          <footer
            onClick={() => {
              navigate(`/playlist/${playlistName._id}`);
            }}
            className="playlist-card-footer cursor-pointer"
          >
            <p>{playlistName.title}</p>
          </footer>
        </div>
      ))}
    </>
  );
};

export const PlaylistVideoCard = ({ video, playlistId }) => {
  const { auth } = useAuth();
  const { authToken } = auth;
  const { featureDispatch } = useFeatures();
  const { _id, title } = video;
  const [modalActive, setModalActive] = useState(false);
  const navigate = useNavigate();
  return (
    <div key={_id} className="videolisting-cards">
      <img
        onClick={() => {
          featureDispatch({ type: "SET_VIDEO", payload: video });
          addVideoToHistory(video, featureDispatch, authToken);
          navigate(`/video/${_id}`);
        }}
        className="videolisting_img"
        src="https://i.ytimg.com/vi/f013dR_y7DI/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLCmmUMogcnMu2KFfSuEnC-AN0plmw"
        alt="error"
      />
      <span className="videolisting-content">
        <p className="flex_r flex1">{title}</p>
        <i
          onClick={() => {
            modalActive ? setModalActive(false) : setModalActive(true);
          }}
          className="fa-solid fa-xl fa-ellipsis-vertical kebab-menu"
        ></i>
      </span>
      {modalActive && (
        <div className="modal flex_c">
          <div
            onClick={() => {
              deleteVideoFromPlaylist(
                title,
                playlistId,
                video,
                featureDispatch,
                authToken
              );
            }}
            className="modalText flex_r"
          >
            <i
              style={{ color: "var(--crimson-red" }}
              className="fa-solid fa-trash-can"
            ></i>
            <p>Remove from Playlist</p>
          </div>
        </div>
      )}
    </div>
  );
};

export const VideoPlayerCard = () => {
  const { featureState, featureDispatch } = useFeatures();
  const { currentVideo } = featureState;
  const { url, title, creator, description } = currentVideo;
  const { auth } = useAuth();
  const { authToken, authStatus } = auth;
  const navigate = useNavigate();
  const { likedVideos, watchLaterVideos } = featureState;
  const { modal, setModal } = useVideo();

  return (
    <div className="video-container flex_c">
      <ReactPlayer width="120rem" height="45rem" controls={true} url={url} />
      <div className="videoDescription-container flex_r">{title}</div>
      <div className="video-features flex_r">
        <div className="video-creator">{creator}</div>
        <div className="video-functions flex_r">
          {likedVideos.find((vid) => vid._id === currentVideo._id) ? (
            <>
              <div
                onClick={() => {
                  authStatus
                    ? deleteFromLikedVideos(
                        currentVideo,
                        featureDispatch,
                        authToken
                      )
                    : navigate("/login");
                }}
                className="flex_r cursor-pointer"
              >
                <i className="fa-solid fa-thumbs-down"></i>
                <p>Dislike</p>
              </div>
            </>
          ) : (
            <>
              <div
                onClick={() => {
                  authStatus
                    ? addToLikedVideos(currentVideo, featureDispatch, authToken)
                    : navigate("/login");
                }}
                className="flex_r cursor-pointer"
              >
                <i className="fa-solid fa-thumbs-up"></i>
                <p>Like</p>
              </div>
            </>
          )}

          <div
            onClick={() =>
              authStatus ? (setModal(!modal)) : navigate("/login")
            }
            className="flex_r cursor-pointer"
          >
            <i className="fa-solid fa-list-check fa-lg"></i>
            <p>Add to Playlist</p>
          </div>
          {watchLaterVideos.find((vid) => vid._id === currentVideo._id) ? (
            <div
              style={{ color: "var(--crimson-red)" }}
              onClick={() =>
                deleteFromWatchLater(currentVideo, featureDispatch, authToken)
              }
              className="flex_r cursor-pointer"
            >
              <i className="fa-regular fa-clock fa-lg"></i>
              <p>Remove from Watch Later</p>
            </div>
          ) : (
            <div
              onClick={() => {
                authStatus
                  ? addToWatchLater(currentVideo, featureDispatch, authToken)
                  : navigate("/login");
              }}
              className="flex_r cursor-pointer"
            >
              <i className="fa-regular fa-clock fa-lg"></i>
              <p>Add to Watch Later</p>
            </div>
          )}
        </div>
      </div>
      <div className="video-description">
        <p>{description}</p>
      </div>
      {modal && (
        <>
          <div className="playlist-overlay">
            <PlayListModal />
          </div>
        </>
      )}
    </div>
  );
};

export const HistoryPageCard = ({ video }) => {
  const { auth } = useAuth();
  const { authToken } = auth;
  const { featureDispatch } = useFeatures();
  const { _id, title } = video;
  const [modalActive, setModalActive] = useState(false);
  const navigate = useNavigate();
  return (
    <div key={_id} className="videolisting-cards">
      <img
        onClick={() => {
          featureDispatch({ type: "SET_VIDEO", payload: video });
          addVideoToHistory(video, featureDispatch, authToken);
          navigate(`/video/${_id}`);
        }}
        className="videolisting_img"
        src="https://i.ytimg.com/vi/f013dR_y7DI/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLCmmUMogcnMu2KFfSuEnC-AN0plmw"
        alt="error"
      />
      <span className="videolisting-content">
        <p className="flex_r flex1">{title}</p>
        <i
          onClick={() => {
            modalActive ? setModalActive(false) : setModalActive(true);
          }}
          className="fa-solid fa-xl fa-ellipsis-vertical kebab-menu"
        ></i>
      </span>
      {modalActive && (
        <div className="modal flex_c">
          <div
            onClick={() => {
              deleteVideoFromHistory(video, featureDispatch, authToken);
            }}
            className="modalText flex_r"
          >
            <i
              style={{ color: "var(--crimson-red" }}
              className="fa-solid fa-trash-can"
            ></i>
            <p>Remove from History</p>
          </div>
        </div>
      )}
    </div>
  );
};
