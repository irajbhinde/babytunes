export const featureReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_LIKED_VIDEOS":
      return {
        ...state,
        likedVideos: [...state.likedVideos, payload],
      };
    case "DELETE_FROM_LIKED_VIDEOS":
      return {
        ...state,
        likedVideos: [
          ...state.likedVideos.filter((vid) => vid._id !== payload._id),
        ],
      };
    case "ADD_TO_WATCH_LATER":
      return {
        ...state,
        watchLaterVideos: [...state.watchLaterVideos, payload],
      };
    case "DELETE_FROM_WATCH_LATER":
      return {
        ...state,
        watchLaterVideos: [
          ...state.watchLaterVideos.filter((vid) => vid._id !== payload._id),
        ],
      };
    case "MODIFY_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.map((item) =>
          item._id === payload._id ? payload : item
        ),
      };

    case "ADD_TO_PLAYLIST":
      return {
        ...state,
        playlist: payload,
      };
    case "DELETE_PLAYLIST":
      return {
        ...state,
        playlist: [
          ...state.playlist.filter((list) => list._id !== payload._id),
        ],
      };
    case "SET_VIDEO":
      return {
        ...state,
        currentVideo: payload,
      };
    default:
      return state;
  }
};
