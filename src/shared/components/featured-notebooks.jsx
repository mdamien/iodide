import React from "react";
import PropTypes from "prop-types";
import NotebookDisplay from "./three-set/three-elements";
import NotebookDisplayItem from "./featured-notebook-item";

const FeaturedNotebooks = ({ width }) => (
  <NotebookDisplay width={width}>
    <NotebookDisplayItem
      title="Reddit: What are the subjects on this subreddit ?"
      description="
                   A concise example demonstrating how powerful
                   a web tech-focused notebook environment is for computational presentations."
      href="https://iodide.io/notebooks/34/?viewMode=report"
      imageSource="https://framapic.org/GtJ54A901JGg/zd4Czp0cxdJU.png"
    />
    <NotebookDisplayItem
      title="Instagram: What do people talk about in your city ?"
      description="
                A tutorial demonstrating how
                to use Python, Numpy, Pandas, and Matplotlib entirely within your browser."
      href="https://iodide.io/notebooks/300/"
      imageSource="https://framapic.org/Cjku6SwQW7KD/igZG4dcWc5kf.png"
    />
    <NotebookDisplayItem
      title="TripAdvisor: Let's cluster those hotels and find the gems"
      description="A neat data exploration using the World Happiness Report."
      href="https://iodide.io/notebooks/193/?viewMode=report"
      imageSource="https://media.giphy.com/media/i4rRuA3cksj8a9R58g/giphy.gif"
    />
  </NotebookDisplay>
);

FeaturedNotebooks.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default FeaturedNotebooks;
