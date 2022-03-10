
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import MovieGroup from "../components/MovieGruop";
import { Link } from "react-router-dom"
import styles from "../css/Home.css";
// import Load from '../component/Load';

const List_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Group() {
  const { group, page } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    // console.log(`getMovie`)
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?page=${page}&${group}&sort_by=rating`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
    // console.log(movies[0])
  }

  useEffect(() => {
    // console.log(`useEffect`)
    setLoading(true);
    getMovies();
    return ;
  }, [group, page])

  return (
    <body>
      {loading ? (
        <h1>Loading..</h1>
      ) : (
          <div class="movieGrid">
            {movies.map((movie) => (
              <MovieGroup
                key={movie.id}
                id={movie.id}
                title={movie.title}
                coverImg={movie.medium_cover_image}
                rating={movie.rating}
                runtime={movie.runtime}
                summary={movie.summary}
                year={movie.year} />
            ))}
          </div>
      )}
      {loading ? (
        null
      ) : (
          <div>
            <div>
              {
                List_arr.map((lst) => {
                  return (
                    <Link
                      key={lst}
                      to={`/page/${group}/${lst}`}
                    >
                      {lst}</Link>
                  )
                })
              }
            </div>
          </div>
      )}
    </body>
  )
}

export default Group;