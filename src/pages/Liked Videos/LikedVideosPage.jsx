import { useNavigate } from "react-router-dom";
import { Nav, Sidebar, VideoListingCard } from "../../Components";
import { useFeatures } from "../../Components/context";
import "./liked-videos.css"
import "../../Utils/styles.css"

export default function LikedVideosPage() {
  const { featureState } = useFeatures();
  const { likedVideos } = featureState;
  const navigate = useNavigate();
  return (
    <>
      <div className="likedVideos-page-wrapper">
        <Nav />
        <Sidebar />
        <div className="likedVideos-page-container">
          {likedVideos.length === 0 ? (
            <>
              <div className="center-container flex_c">
                <div className="empty-list-msg">
                  Your Liked Videos List is Empty
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
            <div className="likedVideos">
              {likedVideos.map((video) => {
                return <VideoListingCard video={video} key={video._id} />;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
