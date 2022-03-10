import React from "react";
import PropTypes from "prop-types";
import styles from "../css/DetailMovie.css";
import Movie from "./Movie";

function DetailMovie({ coverImg, title, genres, backgroundImage, rating, year, runtime, description_full, url }) {
  return (
    <div>
      <img class="backgroundImage" src={backgroundImage} alt={title} />
      <div class="bannerContainer">
      <img clas="banner"src={coverImg} alt={title} />
      <div>
        <h1 class="title"><a href={url}>Title: {title}</a>{" "}</h1>
        <h3>Rating: {rating}</h3>
        <h3>Year: {year}</h3>
        <h3>Running Time: {runtime}mins</h3>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <article>{description_full}</article>
      </div>
      </div>
    </div>
  );
}

DetailMovie.propTypes = {
  id: PropTypes.number.isRequired,localStorage,
  coverImg: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DetailMovie;