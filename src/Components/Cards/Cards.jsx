import "./cards.css";
import "../../Utils/styles.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useVideo } from "../context/video-context";
import { useAuth } from "../context/auth-context";
import { useFeatures } from "../context/page-features-context";
import {
  addToWatchLater,
  deleteFromWatchLater,
} from "../../Utils/videoPage-functions";

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

export const MustWatchCards = ({ video }) => {
  const { modal, setModal } = useVideo();
  const { _id, title } = video;
  const [modalActive, setModalActive] = useState(false);
  const [watchLater, setWatchLater] = useState(false);
  return (
    <div key={_id} className="videolisting-cards">
      <img
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
            onClick={() => setWatchLater(!watchLater)}
            className="modalTextOne flex_r"
          >
            <i
              style={{ color: watchLater ? "var(--crimson-red)" : "" }}
              className="fa-regular fa-clock fa-sm"
            ></i>
            {watchLater ? (
              <p style={{ color: "var(--crimson-red)" }}>
                Remove from Watch Later
              </p>
            ) : (
              <p onClick={() => setWatchLater(true)}>Add to Watch Later</p>
            )}
          </div>
          <div onClick={() => setModal(!modal)} className="modalTextTwo flex_r">
            <i className="fa-solid fa-list-check fa-sm"></i>
            <p>Add to Playlist</p>
          </div>
        </div>
      )}
    </div>
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
  const [watchLater, setWatchLater] = useState(false);
  return (
    <div key={video._id} className="videolisting-cards">
      <img
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
              setWatchLater(!watchLater);
              watchLater
                ? deleteFromWatchLater(video, featureDispatch, authToken)
                : authStatus
                ? addToWatchLater(video, featureDispatch, authToken)
                : navigate("/login");
            }}
            className="modalTextOne flex_r"
          >
            <i
              style={{ color: watchLater ? "var(--crimson-red)" : "" }}
              className="fa-regular fa-clock fa-sm"
            ></i>
            {watchLater ? (
              <p style={{ color: "var(--crimson-red)" }}>
                Remove from Watch Later
              </p>
            ) : (
              <p onClick={() => setWatchLater(true)}>Add to Watch Later</p>
            )}
          </div>
          <div onClick={() => setModal(!modal)} className="modalTextTwo flex_r">
            <i className="fa-solid fa-list-check fa-sm"></i>
            <p>Add to Playlist</p>
          </div>
        </div>
      )}
    </div>
  );
};
