import {
  CategoryCard,
  MustWatchCards,
  Nav,
  PlayListModal,
  Sidebar,
  VideoListingCard,
} from "../../Components";
import { categories } from "../../backend/db/categories";
import "./landingPage.css";
import "../../Utils/styles.css";
import { useVideo } from "../../Components/context/video-context";
import { videos } from "../../backend/db/videos";
export default function Landingpage() {
  const { videoDispatch } = useVideo();
  const { modal, setModal } = useVideo();

  const navigationByCategory = (categoryName) => {
    videoDispatch({ type: "CLEAR_ALL" });
    videoDispatch({ type: categoryName.split(" ").join("_").toUpperCase() });
  };
  return (
    <>
      <div className="home-page-wrapper">
        {modal && (
          <>
            <div className="playlist-overlay">
              <PlayListModal videos={videos} key={videos._id} />
            </div>
          </>
        )}
        <Nav />
        <Sidebar />
        <div className="home-container">
          <div className="catergory-cards">
            {categories.map((category) => (
              <CategoryCard
                category={category}
                key={category._id}
                navigationByCategory={navigationByCategory}
              />
            ))}
          </div>
          <div className="must-watch">
            <p className="must-watch flex_r">Must Watch Videos</p>
            <div className="video-card-container">
              {videos.map(
                (video) =>
                  video.bottom && (
                    <VideoListingCard video={video} key={video._id} />
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
