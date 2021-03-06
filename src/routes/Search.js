import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import SearchMovie from "../components/SearchMovie";
import styles from "../css/Home.css";

function Search() {
  const { search } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [movArr, setMovArr] = useState([]);

  const getMovies = () => {
    // console.log(`getmovie`)
    for (let i = 1; i <= 100; i++) {
      setLoading(true);
      setMovies([]);
      fetch(`https://yts.mx/api/v2/list_movies.json?page=${i}&sort_by=rating`)
        .then((res) => res.json())
        .then((json) => setMovies(json.data.movies))
    }
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    setMovArr([]);
    getMovies();
    // console.log(`lst : ${lst}`)
    // console.log(`search: ${search}`)
    return;
  }, [search])

  useEffect(() => {
    if (movies.length === 0) {
      return <h1>Loading..</h1>;
    }
    else {
      setMovArr(
        (
          [movArr,
            ...[movies.filter((movie) => (movie.summary.toLowerCase().indexOf(search.toLowerCase()) !== -1
              || movie.description_full.toLowerCase().indexOf(search.toLowerCase()) !== -1
              || movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1))]
          ]
        )
          .flat()
          .map((movie, i, arr) => {
            for (let j = i + 1; j < arr.length; j++) {
              if ((movie.id === arr[j].id) && arr[j] !== undefined && movie !== undefined) {
                console.log(i, j);
                console.log(movie.id, arr[j].id);
                arr.splice(j, 1);
                j -= 1;
              }
            }
            return movie;
          })
          .sort((a, b) => b['rating'] - a['rating'])
      )
    }
  }, [movies])


  return (
    <body>
      {loading ? (
        <h1>Loading..</h1>
      ) : (
          <div class="movieGrid">
            {
              movArr.map((movie) => (
                <SearchMovie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  coverImg={movie.medium_cover_image}
                  rating={movie.rating}
                  runtime={movie.runtime}
                  summary={movie.summary}
                  year={movie.year}
                  santa={search}
                />
              ))
            }
          </div>
      )}
    </body>
  )
}

export default Search;