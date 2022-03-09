import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.css";

function SearchMovie({ id, coverImg, title, rating, runtime, year, summary, santa}) {

  return (
    <div>
      {/* ShortView (Img, Title, rating, runtime...) */}
          <div class="movieContainer">
            <div>
              <div>
              <img class="coverImage" src={coverImg} alt={title} />
                <h3 >
                  <Link to={`/movie/${id}`}>
                    {(title.length > 35)
                      ? `${title.slice(0, 35)}...`
                      : title}
                  </Link>
                </h3>
              </div>
            </div>
            <p>{year ? `year: ${year}` : null}</p>
            <p>{rating ? `rating: ${rating} / 10` : null}</p>
            <p>{runtime ? `runtime: ${runtime} (min)` : null}</p>
            <p>{summary ? (summary.length > 180 ? `${summary.slice(0, 180)}...` : summary) : null}</p>
          </div>
        </div>
  )
}

SearchMovie.prototypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  runtime: PropTypes.number,
  download_count: PropTypes.number,
  summary: PropTypes.string
}

export default SearchMovie;