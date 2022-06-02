import "./cards.css";
import "../../Utils/styles.css";
import { categories } from "../../backend/db/categories";

export const CategoryCard = () => {
  return (
    <>
      {categories.map(
        ({ categoryName, image, bottom }) =>
          !bottom && (
            <div class="card">
              <img class="category-img" src={image} alt="error" />
              <p>{categoryName}</p>
            </div>
          )
      )}
    </>
  );
};

export const MustWatchCards = () => {
  return (
    <>
      {categories.map(
        ({ categoryName, image, bottom }) =>
          bottom && (
            <div class="video-card">
              <img
                class="video-img"
                src="https://i.ytimg.com/vi/sqBC6c_hPIs/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLAcSERdukW1KHZrDoFa776rHnHbRQ"
                alt="img"
              />
              <span className="flex_r video-card-desc">
               <p className="flex_r flex1"> Masha & the Bear </p>
               <i className="fa-solid fa-xl fa-ellipsis-vertical flex2"></i>
               </span>
            </div>
          )
      )}
    </>
  );
};
