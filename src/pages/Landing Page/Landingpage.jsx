import { CategoryCard, MustWatchCards, Nav, Sidebar } from "../../Components";
import "./landingPage.css";
import "../../Utils/styles.css";
export default function Landingpage() {
  return (
    <>
      <div className="home-page-wrapper">
        <Nav />
        <Sidebar />
        <div className="home-container">
          <div class="catergory-cards">
            <CategoryCard />
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
