export const videoReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "MUSIC":
      return {
        ...state,
        categories: {
          ...state.categories,
          Music: !state.categories.Music,
        },
      };
    case "TV_SHOWS":
      return {
        ...state,
        categories: {
          ...state.categories,
          TV_Shows: !state.categories.TV_Shows,
        },
      };
    case "LEARNING":
      return {
        ...state,
        categories: {
          ...state.categories,
          Learning: !state.categories.Learning,
        },
      };
    case "CARTOON":
      return {
        ...state,
        categories: {
          ...state.categories,
          Cartoon: !state.categories.Cartoon,
        },
      };
    case "SPORTS":
      return {
        ...state,
        categories: {
          ...state.categories,
          Sports: !state.categories.Sports,
        },
      };
    case "CLEAR_ALL":
      return {
        ...state,
        categories: {
          Music: false,
          TV_Shows: false,
          Learning: false,
          Cartoon: false,
          Sports: false,
        },
      };
    default:
      return state;
  }
};
