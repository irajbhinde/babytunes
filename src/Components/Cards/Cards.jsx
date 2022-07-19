import "./cards.css";
import "../../Utils/styles.css";
import { categories } from "../../backend/db/categories";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useVideo } from "../context/video-context";
import { videos } from "../../backend/db/videos";

export const CategoryCard = ({ navigationByCategory }) => {
  return (
    <>
      {categories.map(
        ({ categoryName, image, bottom }) =>
          !bottom && (
            <Link to="/videolisting">
              <div
                onClick={() => navigationByCategory(categoryName)}
                class="card"
              >
                <img class="category-img" src={image} alt="error" />
                <p>{categoryName}</p>
              </div>
            </Link>
          )
      )}
    </>
  );
};

export const MustWatchCards = ({ video }) => {
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
        <div class="modal flex_c">
          <div
            onClick={() => setWatchLater(!watchLater)}
            class="modalTextOne flex_r"
          >
            <i
              style={{ color: watchLater ? "var(--crimson-red)" : "" }}
              class="fa-regular fa-clock fa-sm"
            ></i>
            {watchLater ? (
              <p style={{ color: "var(--crimson-red)" }}>
                Remove from Watch Later
              </p>
            ) : (
              <p onClick={() => setWatchLater(true)}>Add to Watch Later</p>
            )}
          </div>
          <div onClick={() => setModal(!modal)} class="modalTextTwo flex_r">
            <i class="fa-solid fa-list-check fa-sm"></i>
            <p>Add to Playlist</p>
          </div>
        </div>
      )}
    </div>
  );
};

export const VideoListingCard = ({ video }) => {
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
        <div class="modal flex_c">
          <div
            onClick={() => setWatchLater(!watchLater)}
            class="modalTextOne flex_r"
          >
            <i
              style={{ color: watchLater ? "var(--crimson-red)" : "" }}
              class="fa-regular fa-clock fa-sm"
            ></i>
            {watchLater ? (
              <p style={{ color: "var(--crimson-red)" }}>
                Remove from Watch Later
              </p>
            ) : (
              <p onClick={() => setWatchLater(true)}>Add to Watch Later</p>
            )}
          </div>
          <div onClick={() => setModal(!modal)} class="modalTextTwo flex_r">
            <i class="fa-solid fa-list-check fa-sm"></i>
            <p>Add to Playlist</p>
          </div>
        </div>
      )}
    </div>
  );
};
