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
    featureDispatch({ type: "REMOVE_FROM_LIKED_VIDEOS", payload: video });
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

export {
  addToLikedVideos,
  deleteFromLikedVideos,
  addToWatchLater,
  deleteFromWatchLater,
};
