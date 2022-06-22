const getFilteredData = (videoList, categories) => {
  console.log("cat", categories);
  if (Object.values(categories).every((categories) => categories === false)) {
    return videoList;
  }
  return videoList.filter((video) => categories[video.categoryName]);
};

export { getFilteredData };
