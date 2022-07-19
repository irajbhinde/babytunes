import { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../../backend/db/categories";
import { useVideo } from "../context/video-context";
import "./chips.css";

export default function Chips({ navigationByCategory }) {
  const { videoState, videoDispatch } = useVideo();
  const {
    categories: { Music, TV_Shows, Learning, Cartoon, Sports },
  } = videoState;

  return (
    <>
      <section className="homepage-chips">
        <div
          onClick={() => {
            videoDispatch({ type: "CLEAR_ALL" });
            videoDispatch({ type: "TV_SHOWS" });
          }}
          className="chips"
          style={
            TV_Shows
              ? { backgroundColor: "#fff", color: "var(--page-bg)" }
              : { backgroundColor: "#373737" }
          }
        >
          TV Shows
        </div>
        <div
          style={
            Music
              ? { backgroundColor: "#fff", color: "var(--page-bg)" }
              : { backgroundColor: "#373737" }
          }
          onClick={() => {
            videoDispatch({ type: "CLEAR_ALL" });
            videoDispatch({ type: "MUSIC" });
          }}
          className="chips"
        >
          Music
        </div>
        <div
          style={
            Learning
              ? { backgroundColor: "#fff", color: "var(--page-bg)" }
              : { backgroundColor: "#373737" }
          }
          onClick={() => {
            videoDispatch({ type: "CLEAR_ALL" });
            videoDispatch({ type: "LEARNING" });
          }}
          className="chips"
        >
          Learning
        </div>
        <div
          style={
            Cartoon
              ? { backgroundColor: "#fff", color: "var(--page-bg)" }
              : { backgroundColor: "#373737" }
          }
          onClick={() => {
            videoDispatch({ type: "CLEAR_ALL" });
            videoDispatch({ type: "CARTOON" });
          }}
          className="chips"
        >
          Cartoon
        </div>
        <div
          style={
            Sports
              ? { backgroundColor: "#fff", color: "var(--page-bg)" }
              : { backgroundColor: "#373737" }
          }
          onClick={() => {
            videoDispatch({ type: "CLEAR_ALL" });
            videoDispatch({ type: "SPORTS" });
          }}
          className="chips"
        >
          Sports
        </div>
        <div
          style={
            !Music && !TV_Shows && !Learning && !Cartoon && !Sports
              ? { backgroundColor: "#fff", color: "var(--page-bg)" }
              : { backgroundColor: "#373737" }
          }
          onClick={() => {
            videoDispatch({ type: "CLEAR_ALL" });
          }}
          className="chips"
        >
          Explore All
        </div>
      </section>
    </>
  );
}
