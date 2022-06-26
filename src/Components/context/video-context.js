import { createContext, useContext, useReducer, useState } from "react";
import { videoReducer } from "../reducers/videoReducer";

const initialState = {
  categories: {
    Music: null,
    TV_Shows: null,
    Learning: null,
    Cartoon: null,
    Sports: null,
  },
};

const VideoContext = createContext(null);
const useVideo = () => useContext(VideoContext);
const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(videoReducer, initialState);
  const [modal, setModal] = useState(false);
  return (
    <VideoContext.Provider
      value={{ videoState, videoDispatch, modal, setModal }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export { useVideo, VideoProvider };
