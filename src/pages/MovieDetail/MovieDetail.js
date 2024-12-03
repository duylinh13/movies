import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import APIServices from "../../services/APIServices";
import Loading from "../../components/Loading/Loading";
import "./MovieDetail.css";
import { FaStar } from "react-icons/fa";
import ReactPlayer from "react-player";

const MovieDetail = () => {
  const params = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const videoRef = useRef(null);

  const {
    title,
    overview,
    genreList,
    trailer,
    youtube_url,
    Swiper,
    Pagination,
    casts,
    vote_average,
    released,
    poster_path,
    backdrop_path,
  } = movieDetail;

  const fetchMovieDetail = async () => {
    setLoading(true);
    try {
      const data = await APIServices.getMovieDetailById(params.movieId);
      setMovieDetail(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetail();
  }, []);

  const onPlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (loading) {
    return <Loading />;
  }

  const imageURL = `https://image.tmdb.org/t/p/original${poster_path}`;
  const cardStyle = { backgroundImage: `url(${imageURL})` };
  return (
    <div className="container">
      <div className="section-detail-hero">
        <div className="hero-img">
          <img src={imageURL}></img>
        </div>
        <div className="hero-content">
          <h2 className="big-title detail-title">
            {title}_<FaStar />
            {vote_average}
          </h2>
          <div className="detail-overview">
            <p>{overview}</p>
          </div>
          <div className="visit-website">
            <button className="btn-visit-website" onClick={onPlayVideo}>
              Play video
            </button>
          </div>
        </div>
      </div>
      <div className="video-wrapper" ref={videoRef}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=9DiiAcCidSc"
          ref={videoRef}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default MovieDetail;
