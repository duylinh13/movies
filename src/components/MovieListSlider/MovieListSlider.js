import React, { useState } from 'react';
import MovieCard from "../MovieCard/MovieCard";
import Loading from "../Loading/Loading";
import "./MovieListSlider.css";
import Slider from "react-slick";
import { FaBookmark} from "react-icons/fa";

const MovieListSlider = (props) => {
  const { movies = [], movieCategoryTitle, loading } = props;
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const handleAddToFavorites = (selectedMovie) => {
    const favoritesFromStorage = localStorage.getItem('favorites');
    const favorites = favoritesFromStorage ? JSON.parse(favoritesFromStorage) : [];

    const isMovieFavorite = favorites.some((movie) => movie.id === selectedMovie.id);

    if (!isMovieFavorite) {
      favorites.push(selectedMovie);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setFavoriteMovies(favorites);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: "24px",
  };

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <h1 className="section-title">{movieCategoryTitle}</h1>
      <div className="movie-list">
        <Slider {...settings}>
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card-wrapper">
              <MovieCard data={movie} />
              <div className="button-wrapper">
                <button onClick={() => handleAddToFavorites(movie)} className="buttonfavorite">
                  <FaBookmark />
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MovieListSlider;