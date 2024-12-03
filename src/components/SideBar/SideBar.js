import React from "react";
import "./SideBar.css";
import logo1 from "../../images/logo1.jpg";
import {
  FaHome,
  FaFilm,
  FaTv,
  FaStar,
  FaList,
  FaThumbsUp,
  FaHeart,
  FaHandPointUp,
  FaCog,
  FaUserPlus,
  FaArrowRight,
  FaFire,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

const SideBar = ({ signOut }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    navigate("/login");
  };
  const handleHome = () => {
    navigate("/");
  };
  const handlePopular = () => {
    navigate("/popular");
  };
  const handleToprated = () => {
    navigate("/toprated");
  };
  const handleLikePage = () => {
    navigate("/like");
  };
  const handleGenrePage = () => {
    navigate("/genre");
  };
  const handleSetting = () => {
    navigate("/settings");
  };
  const handleMovies = () => {
    navigate("/movies");
  };
  const handleShows = () => {
    navigate("/Show");
  };
  const handleForyou = () => {
    navigate("/foryou");
  };
  const handleMember = () => {
    navigate("/member");
  };
  const handleFavorites = () => {
    navigate("/favorite");
  };

  

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-avatar">
        <img src={logo1} alt="logo" />
      </div>
      <div className="sidebar">
        <ul>
          <li className="icon-with-text" onClick={handleHome}>
            <FaHome /> Home
          </li>
          <li className="icon-with-text"onClick={handleMovies}>
            <FaFilm />
            Movies
          </li>
          <li className="icon-with-text" onClick={handleShows}>
            <FaTv /> Shows
          </li>
        </ul>
        <ul>
          <li className="icon-with-text" onClick={handleToprated}>
            <FaStar /> Top-Rated
          </li>
          <li className="icon-with-text" onClick={handlePopular}>
            <FaFire /> Popular
          </li>
          <li className="icon-with-text" onClick={handleGenrePage}>
            <FaList /> Genre
          </li>
        </ul>

        <ul>
          <li className="icon-with-text" onClick={handleLikePage}>
          
            <FaThumbsUp /> Likes
          </li>
          <li className="icon-with-text" onClick={handleFavorites}>
            {/* <Link to="/favorite" className="favorite-link"> */}
              <FaHeart /> Favorite
            {/* </Link> */}
          </li>
          <li className="icon-with-text" onClick={handleForyou}>
            <FaHandPointUp /> For You
          </li>
        </ul>

        <ul>
          <li className="icon-with-text" onClick={handleSetting}>
            <FaCog /> Setting
          </li>
          <li className="icon-with-text" onClick={handleMember}>
            <FaUserPlus /> Member
          </li>
          <button className="btn2" onClick={handleSignOut}>
            <FaArrowRight />
            Sign Out
          </button>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
