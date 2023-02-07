import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import MovieList from "../../components/movieList/MovieList";


const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  return (
    <div class="poster">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={5}
        infiniteLoop={true}
        showStatus={false}
      >
        {popularMovies.map((movie) => (
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/movie/${movie.id}`}
          >
            <div className="posterImage" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${
                  movie && movie.backdrop_path
                }`}
                alt=""
              />
            </div>
            <div class="posterImage__overlay">
              <div class="posterImage__title">
                {movie ? movie.original_title : ""}
              </div>
              <div class="posterImage_runtime">
                {movie ? movie.release_date : ""}
                <span class="posterImage__rating">
                  {movie ? movie.vote_average : ""}

                  <i className="fas fa-star" style={{ color: 'yellow', fontSize: '24px' }}></i>
                </span>
              </div>
              <div class="posterImage__description">
                {movie ? movie.overview : ""}
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
      <MovieList/>
    </div>
  );
};

export default Home;
