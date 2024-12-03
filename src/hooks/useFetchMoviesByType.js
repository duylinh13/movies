import { useEffect, useState } from "react";
import APIServices from "../services/APIServices";

/**
 * Custom hook
 * @param {movieType} movieType
 * @desc movieType is one of "popular" | "upcoming" | "top_rated"
 */
const useFetchMovieByType = (movieType = "popular", isFetch = true) => {
  // 1. Props

  // 2. State & hooks
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  // 3. Effects
  const onFetchMovie = async () => {
    setLoading(true);
    try {
      const data = await APIServices.getMoviesByType(movieType);
      setData(data.results);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    onFetchMovie();
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export default useFetchMovieByType;
