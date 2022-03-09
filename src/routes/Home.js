import React from "react";
import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "./Home.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
// this below code is the same function as useEffect fetch function
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.0&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <body>
      {loading ? (
        <h1>Loading...</h1>
        ) : (
          <div class="movieGrid">
            {movies.map((movie) => (
              <Movie
                key={movie.id} 
                id={movie.id}
                coverImg={movie.medium_cover_image} 
                title={movie.title} 
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
    </body>
  );
}

export default Home;