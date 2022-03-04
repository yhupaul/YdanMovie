import PropTypes from "prop-types";

function DetailMovie({ coverImg, title, summary, genres, backgroundImage, rating, year, runtime, description_full }) {
  return (
    <div>
      <img src={backgroundImage} alt={title} />
      <br />
      <img src={coverImg} alt={title} />
      <div>
        <h2>{title}</h2>
        <h3>{rating} {year}</h3>
        <p>{runtime}</p>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <article>{description_full}</article>
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
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DetailMovie;