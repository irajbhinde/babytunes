import { CategoryCard, MustWatchCards, Nav, Sidebar } from "../../Components";
import "./landingPage.css";
import "../../Utils/styles.css";
import { useVideo } from "../../Components/context/video-context";
export default function Landingpage() {
  const {videoDispatch} = useVideo();
  const navigationByCategory = (categoryName) => {
    videoDispatch({type : categoryName.split(" ").join("_").toUpperCase()})
  }
  return (
    <>
      <div className="home-page-wrapper">
        <Nav />
        <Sidebar />
        <div className="home-container">
          <div class="catergory-cards">
            <CategoryCard navigationByCategory={navigationByCategory} />
          </div>
          <div class="must-watch">
            <p className="must-watch flex_r">Must Watch Videos</p>
            <div class="video-card-container">
              <MustWatchCards />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
