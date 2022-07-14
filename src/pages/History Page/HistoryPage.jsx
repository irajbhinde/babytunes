import { useNavigate } from "react-router-dom";
import { HistoryPageCard, Nav, Sidebar } from "../../Components";
import { useAuth, useFeatures } from "../../Components/context";
import "./history-page.css";
import "../../Utils/styles.css";
import { deleteAllVideoFromHistory } from "../../Utils/videoPage-functions";

export default function HistoryPage() {
  const { featureState, featureDispatch } = useFeatures();
  const { historyVideos } = featureState;
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { authToken } = auth;
  return (
    <>
      <div className="historyVideos-page-wrapper">
        <Nav />
        <Sidebar />
        <div className="historyVideos-page-container">
          {historyVideos.length === 0 ? (
            <>
              <div className="center-container flex_c">
                <div className="empty-list-msg">Your History is Empty</div>
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
            <>
              <div className="clearHistory flex_r">
                <button
                  onClick={() => {
                    deleteAllVideoFromHistory(featureDispatch, authToken);
                  }}
                  className="btn-createPlaylist"
                >
                  Clear History
                </button>
              </div>
              <div className="historyVideos">
                {historyVideos.map((video) => {
                  return <HistoryPageCard video={video} key={video._id} />;
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
