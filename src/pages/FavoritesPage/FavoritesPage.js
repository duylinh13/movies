import React, { useEffect, useState } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import Slider from "react-slick";
import "./FavoritesPage.css"
import { FaSearch } from 'react-icons/fa';
const FavoritesPage = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: "5px",
  };

  useEffect(() => {
    const favoritesFromStorage = localStorage.getItem('favorites');
    const favorites = favoritesFromStorage ? JSON.parse(favoritesFromStorage) : [];
    setFavoriteMovies(favorites);
  }, []);

  return (
    <div className="favorites-list">
     <div className="row">
      <h2 className="text">Favorites</h2>
        <div className="box">
          <input type="text" placeholder="Search here" />
          <a><FaSearch /></a>
        </div>
       
      </div>
      <Slider {...settings}>
      {favoriteMovies.map((movie) => (
        
        <MovieCard data={movie} key={movie.id} />
       
      ))}
      </Slider>
    </div>
  );
};

export default FavoritesPage;