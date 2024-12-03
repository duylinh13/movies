import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import "./MovieCard.css";

const MovieCard = (props) => {
  const { data } = props;
  const { title, overview, vote_average, poster_path, id } = data;
  const navigate = useNavigate();

  const imageURL = `https://image.tmdb.org/t/p/original${poster_path}`;
  const toMovieDetailPage = `/movies/${id}`;


  return (
    <div className="movie-card" onClick={() => navigate(toMovieDetailPage)}>
      <img src={imageURL} alt={title} />
      <h3 className="movie-card-title">{title}</h3>
    </div>
   
  );

};

export default MovieCard;


