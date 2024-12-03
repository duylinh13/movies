import "./TopRatedPage.css";
import MovieListSlider from "../../components/MovieListSlider/MovieListSlider";
import useFetchMovieByType from "../../hooks/useFetchMoviesByType";
import { FaSearch } from "react-icons/fa";

const TopRatedPage = () => {

  const { loading: topRatedLoading, data: topRatedMovies } =
    useFetchMovieByType("top_rated");


  return (
    <div className="container">
      <div className="box">
        <input type="text" placeholder="Search here" />
        <a><FaSearch /></a>
      </div>
      <MovieListSlider
        movies={topRatedMovies}
        movieCategoryTitle="Top rated movies"
        loading={topRatedLoading}
      />

    </div>
  );
};

export default TopRatedPage;
