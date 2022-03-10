import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/Movie.css"

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div class="movieContainer">
    <div class="movietitle">      
      <img class="coverImage" src={coverImg} alt={title} />
      <div class="description">
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary.length > 300 ? `${summary.slice(0, 300)}...` : summary}</p>
        <div class="genres">
          {genres.map((g) => (
            <span key={g}>{g}</span>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,localStorage,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
