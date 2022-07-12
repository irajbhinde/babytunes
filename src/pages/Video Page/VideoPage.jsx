import { Nav, Sidebar } from "../../Components";
import "./video-page.css";
import "../../Utils/styles.css";
import { VideoPlayerCard } from "../../Components/Cards/Cards";

export default function VideoPage() {
  return (
    <div className="videoPage-wrapper">
      <Nav />
      <Sidebar />
      <div className="videoPage-container">
        <div className="videos">
          <VideoPlayerCard />
        </div>
      </div>
    </div>
  );
}
