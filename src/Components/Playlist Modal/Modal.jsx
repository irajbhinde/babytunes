import "./modal.css";
import "../../Utils/styles.css";
import { useVideo } from "../context/video-context";

export const PlayListModal = () => {
  const { modal, setModal } = useVideo();
  return (
    <div className="playlist-modal">
      <div className="header flex_r">
        <p>Save to...</p>
        <i
          onClick={() => setModal(false)}
          className="fa-solid fa-xmark fa-lg"
        ></i>
      </div>
      <div className="listOfPlaylist">No Playlist Created</div>
      <div className="modal-footer">
        <input type="text" placeholder="Create a New Playlist" />
        <button className="plus-icon">
          <i className="fa-solid fa-plus fa-lg"></i>
        </button>
      </div>
    </div>
  );
};
