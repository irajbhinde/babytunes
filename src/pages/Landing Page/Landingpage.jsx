import {
  CategoryCard,
  MustWatchCards,
  Nav,
  PlayListModal,
  Sidebar,
} from "../../Components";
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
              <PlayListModal />
            </div>
          </>
        )}
        <Nav />
        <Sidebar />
        <div className="home-container">
          <div class="catergory-cards">
            <CategoryCard navigationByCategory={navigationByCategory} />
          </div>
          <div class="must-watch">
            <p className="must-watch flex_r">Must Watch Videos</p>
            <div class="video-card-container">
              {videos.map(
                (video) =>
                  video.bottom && (
                    <MustWatchCards video={video} key={video._id} />
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
