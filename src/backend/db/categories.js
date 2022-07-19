import { v4 as uuid } from "uuid";
import { music, explore, idea, tv_shows, cartoon, sports } from "../../assets";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Music",
    description:
      "Computer programming is the process of designing and building an executable computer program to accomplish a specific computing",
    image: music,
  },
  {
    _id: uuid(),
    categoryName: "TV Shows",
    description:
      "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application",
    image: tv_shows,
  },

  {
    _id: uuid(),
    categoryName: "Learning",
    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
    image: idea,
  },
  {
    _id: uuid(),
    categoryName: "Cartoon",
    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
    image: cartoon,
  },
  {
    _id: uuid(),
    categoryName: "Sports",
    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
    image: sports,
  },
  {
    _id: uuid(),
    categoryName: "Explore All",
    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
    image: explore,
  },
];
