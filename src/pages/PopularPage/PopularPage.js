import "./PopularPage.css";
import MovieListSlider from "../../components/MovieListSlider/MovieListSlider";
import useFetchMovieByType from "../../hooks/useFetchMoviesByType";
import { FaSearch } from "react-icons/fa";

const TopRatedPage = () => {

    const { loading: popularLoading, data: popularMovies } =
        useFetchMovieByType("popular");


    return (
        <div className="container">
            <div className="box">
                <input type="text" placeholder="Search here" />
                <a><FaSearch /></a>
            </div>
            <MovieListSlider
                movies={popularMovies}
                movieCategoryTitle="PopularMovies"
                loading={popularLoading}
            />
        </div>
    );
};

export default TopRatedPage;
