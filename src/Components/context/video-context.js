import { createContext, useContext, useReducer } from "react";
import { videoReducer } from "../reducers/videoReducer";

const initialState = {
  categories: {
    Music: null,
    TV_Shows: null,
    Explore: null,
    Learning: null,
    Cartoon: null,
    Sports: null,
  },
};

const VideoContext = createContext(null);
const useVideo = () => useContext(VideoContext);
const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(videoReducer, initialState);
  return (
    <VideoContext.Provider value={{ videoState, videoDispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

export { useVideo, VideoProvider };
