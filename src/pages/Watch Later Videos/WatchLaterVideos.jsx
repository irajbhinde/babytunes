import { Nav, Sidebar, VideoListingCard } from "../../Components";
import { useAuth, useFeatures } from "../../Components/context";
import "../../Utils/styles.css";
import "./watchLaterVideos-page.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function WatchLaterVideos() {
  const { featureState, featureDispatch } = useFeatures();
  const { watchLaterVideos } = featureState;
  const navigate = useNavigate();

  return (
    <>
      <div className="watchLaterVideos-page-wrapper">
        <Nav />
        <Sidebar />
        <div className="watchLaterVideos-page-container">
          {watchLaterVideos.length === 0 ? (
            <>
              <div className="center-container flex_c">
                <div className="empty-list-msg">
                  Your Watch Later List is Empty
                </div>
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
            <div className="watchLater">
              {watchLaterVideos.map((video) => {
                return <VideoListingCard video={video} key={video._id} />;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
