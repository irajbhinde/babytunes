import MockmanEs from "mockman-js";
import { Routes, Route } from "react-router-dom";
import {
  Landingpage,
  VideoListingPage,
  LoginPage,
  WatchLaterVideos,
  PlaylistPage,
  PlaylistVideos,
  VideoPage,
  LikedVideosPage,
  HistoryPage,
} from "../index";
import SignupPage from "../Signup Page/SignupPage";
import RequiresAuth from "../../Utils/RequiresAuth";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/videolisting" element={<VideoListingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/mockman" element={<MockmanEs />} />
      <Route
        path="/watchlater"
        element={
          <RequiresAuth>
            <WatchLaterVideos />
          </RequiresAuth>
        }
      />
      <Route
        path="/playlist"
        element={
          <RequiresAuth>
            <PlaylistPage />
          </RequiresAuth>
        }
      />
      <Route
        path="/playlist/:playlistId"
        element={
          <RequiresAuth>
            <PlaylistVideos />
          </RequiresAuth>
        }
      />
      <Route path="/video/:videoId" element={<VideoPage />} />
      <Route
        path="/likedvideos"
        element={
          <RequiresAuth>
            <LikedVideosPage />
          </RequiresAuth>
        }
      />
      <Route
        path="/history"
        element={
          <RequiresAuth>
            <HistoryPage />
          </RequiresAuth>
        }
      />
    </Routes>
  );
}
