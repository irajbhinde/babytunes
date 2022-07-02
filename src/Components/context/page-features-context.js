import { createContext, useContext, useReducer, useState } from "react";
import { featureReducer } from "../reducers/featureReducer";

const initialState = {
  likedVideos: [],
  watchLaterVideos: [],
  historyVideos: [],
  playlistVideos: [],
};

const PageFeaturesContext = createContext(null);

const FeatureProvider = ({ children }) => {
  const [featureState, featureDispatch] = useReducer(
    featureReducer,
    initialState
  );
  return (
    <PageFeaturesContext.Provider value={{ featureState, featureDispatch }}>
      {children}
    </PageFeaturesContext.Provider>
  );
};

const useFeatures = () => useContext(PageFeaturesContext);
export { useFeatures, FeatureProvider };
