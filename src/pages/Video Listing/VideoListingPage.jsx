import { videos } from "../../backend/db/videos";
import { Chips, Nav, Sidebar, VideoListingCard } from "../../Components";
import "./video-listing-page.css";

export default function VideoListingPage() {
  console.log(videos);
  return (
    <>
      <div className="videolisting-page-wrapper">
        <Nav />
        <Sidebar />
        <Chips />
        <div className="videolisting-container">
          
          <div className="video-listing">
            {videos.map((video) => (
              <VideoListingCard video={video} key={video._id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
