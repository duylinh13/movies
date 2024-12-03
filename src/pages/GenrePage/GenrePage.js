
import MovieListSlider from "../../components/MovieListSlider/MovieListSlider";
import useFetchMovieByType from "../../hooks/useFetchMoviesByType";
import "./GenrePage.css"
import { FaSearch } from "react-icons/fa";
const Homepage = () => {
  const { loading: popularLoading, data: popularMovies } =
    useFetchMovieByType("popular");
  const { loading: upcomingLoading, data: upcomingMovies } =
    useFetchMovieByType("upcoming");
  const { loading: topRatedLoading, data: topRatedMovies } =
    useFetchMovieByType("top_rated");
    const { loading: nowPlayingLoading, data: nowPlayingMovies } =
    useFetchMovieByType("now_playing");

  return (
    <div className="container">
      
      <div className="box">
          <input type="text" placeholder="Search here" />
          <a><FaSearch/></a>
        </div>
      <MovieListSlider
        movies={topRatedMovies}
        movieCategoryTitle="Top rated movies"
        loading={topRatedLoading}
      />
  
       <MovieListSlider
        movies={popularMovies}
        movieCategoryTitle="PopularMovies"
        loading={popularLoading}
      />
      <MovieListSlider
        movies={upcomingMovies}
        movieCategoryTitle="Upcoming movies"
        loading={upcomingLoading}
      />
      <MovieListSlider
        movies={nowPlayingMovies}
        movieCategoryTitle="Now playing movies"
        loading={nowPlayingLoading}
      />
    </div>
  );
};

export default Homepage;
