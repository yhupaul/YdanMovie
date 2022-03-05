import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DetailMovie from "../components/DetailMovie";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
        ) : (
          <div>
             <div>
            <Link to="/">Home</Link>
            </div>
              <DetailMovie 
                backgroundImage={
                  movie.data.movie.background_image_original
                }
                coverImg={movie.data.movie.medium_cover_image}
                title={movie.data.movie.title}
                rating={movie.data.movie.rating}
                genres={movie.data.movie.genres}
                year={movie.data.movie.year}
                runtime={movie.data.movie.runtime}
                description_full={movie.data.movie.description_full}
              />
          </div>
        )}
    </div>
  );
}
export default Detail;