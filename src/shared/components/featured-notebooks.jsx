import React from "react";
import PropTypes from "prop-types";
import NotebookDisplay from "./three-set/three-elements";
import NotebookDisplayItem from "./featured-notebook-item";

const FeaturedNotebooks = ({ width }) => (
  <NotebookDisplay width={width}>
    <NotebookDisplayItem
      title="Reddit"
      description="What are the subjects on this subreddit ?"
      href="https://iodide.io/notebooks/34/?viewMode=report"
      imageSource="https://framapic.org/GtJ54A901JGg/zd4Czp0cxdJU.png"
    />
    <NotebookDisplayItem
      title="Instagram"
      description="What do people talk about in your city ?"
      href="notebooks/2/?viewMode=report"
      imageSource="https://framapic.org/Cjku6SwQW7KD/igZG4dcWc5kf.png"
    />
    <NotebookDisplayItem
      title="TripAdvisor"
      description="Let's cluster those hotels and find the gems"
      href="https://iodide.io/notebooks/193/?viewMode=report"
      imageSource="https://framapic.org/wMCJJH01WlKY/p9F5ZgY228VM.png"
    />
  </NotebookDisplay>
);

FeaturedNotebooks.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default FeaturedNotebooks;
