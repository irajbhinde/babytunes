import { useEffect, useState } from "react";
import axios from "axios";
import { Chips, Nav, Sidebar, VideoListingCard } from "../../Components";
import { useVideo } from "../../Components/context/video-context";
import "./video-listing-page.css";
import { getFilteredData } from "../../Utils/getFilteredData";

export default function VideoListingPage() {
  const {
    videoState: { categories },
  } = useVideo();
  const [videoData, setVideoData] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("/api/videos");
        setVideoData(response.data.videos);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  const sortByCategory = getFilteredData(videoData, categories);
  return (
    <>
      <div className="videolisting-page-wrapper">
        <Nav />
        <Sidebar />
        <Chips />
        <div className="videolisting-container">
          <div className="video-listing">
            {sortByCategory.map((video) => (
              <VideoListingCard video={video} key={video._id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
