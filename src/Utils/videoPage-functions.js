import axios from "axios";

const addToLikedVideos = async (video, featureDispatch, authToken) => {
  try {
    const response = await axios.post(
      `/api/user/likes`,
      { video },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    featureDispatch({ type: "ADD_TO_LIKED_VIDEOS", payload: video });
  } catch (error) {
    console.log(error);
  }
};

const deleteFromLikedVideos = async (video, featureDispatch, authToken) => {
  try {
    const response = await axios.delete(`/api/user/likes/${video._id}`, {
      headers: {
        authorization: authToken,
      },
    });
    featureDispatch({ type: "DELETE_FROM_LIKED_VIDEOS", payload: video });
  } catch (error) {
    console.log(error);
  }
};

const addToWatchLater = async (video, featureDispatch, authToken) => {
  try {
    const response = await axios.post(
      `/api/user/watchlater`,
      {
        video,
      },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    featureDispatch({ type: "ADD_TO_WATCH_LATER", payload: video });
  } catch (error) {
    console.log(error);
  }
};

const deleteFromWatchLater = async (video, featureDispatch, authToken) => {
  try {
    const response = await axios.delete(`/api/user/watchlater/${video._id}`, {
      headers: {
        authorization: authToken,
      },
    });
    featureDispatch({ type: "DELETE_FROM_WATCH_LATER", payload: video });
  } catch (error) {
    console.log(error);
  }
};

const addToPlaylist = async (playlistTitle, featureDispatch, authToken) => {
  try {
    const response = await axios.post(
      `/api/user/playlists`,
      {
        playlist: { title: playlistTitle },
      },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    featureDispatch({
      type: "ADD_TO_PLAYLIST",
      payload: response.data.playlists,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteFromPlaylist = async (
  playlistTitle,
  featureDispatch,
  authToken
) => {
  try {
    const response = await axios.delete(
      `api/user/playlists/${playlistTitle._id}`,
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    featureDispatch({ type: "DELETE_PLAYLIST", payload: playlistTitle });
  } catch (error) {
    console.log(error);
  }
};

const addVideoToPlaylist = async (
  playlistTitle,
  playlistId,
  currentVideo,
  featureDispatch,
  authToken
) => {
  try {
    const response = await axios.post(
      `/api/user/playlists/${playlistId}`,
      {
        video: currentVideo,
      },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    featureDispatch({
      type: "MODIFY_PLAYLIST",
      payload: response.data.playlist,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteVideoFromPlaylist = async (
  playlistTitle,
  playlistId,
  currentVideo,
  featureDispatch,
  authToken
) => {
  try {
    const response = await axios.delete(
      `/api/user/playlists/${playlistId}/${currentVideo._id}`,
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    featureDispatch({
      type: "MODIFY_PLAYLIST",
      payload: response.data.playlist,
    });
  } catch (error) {
    console.log(error);
  }
};

const addVideoToHistory = async (video, featureDispatch, authToken) => {
  try {
    const response = await axios.post(
      `/api/user/history`,
      { video },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    featureDispatch({ type: "ADD_TO_HISTORY", payload: video });
  } catch (error) {
    console.log(error);
  }
};

const deleteVideoFromHistory = async (
  currentVideo,
  featureDispatch,
  authToken
) => {
  try {
    const response = await axios.delete(
      `/api/user/history/${currentVideo._id}`,
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    featureDispatch({ type: "DELETE_FROM_HISTORY", payload: currentVideo });
  } catch (error) {
    console.log(error);
  }
};

const deleteAllVideoFromHistory = async (featureDispatch, authToken) => {
  try {
    const response = await axios.delete(`/api/user/history/all`, {
      headers: {
        authorization: authToken,
      },
    });
    featureDispatch({
      type: "DELETE_ENTIRE_HISTORY",
      payload: response.data.history,
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  addToLikedVideos,
  deleteFromLikedVideos,
  addToWatchLater,
  deleteFromWatchLater,
  addToPlaylist,
  deleteFromPlaylist,
  addVideoToPlaylist,
  deleteVideoFromPlaylist,
  addVideoToHistory,
  deleteVideoFromHistory,
  deleteAllVideoFromHistory,
};
