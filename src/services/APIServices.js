// SINGLE OF TRUTH
const apiUrlBuilder = (endpoint) => {
  return `https://api.themoviedb.org/3${endpoint}?api_key=f5604f45a67acfff1cd1e7f5065da619`;
};

const APIServices = {
  getMoviesByType: (movieType) => {
    const url = apiUrlBuilder(`/movie/${movieType}`);
    return fetch(url).then((response) => response.json());
  },
  getMovieDetailById: (movieId) => {
    const url = apiUrlBuilder(`/movie/${movieId}`);
    return fetch(url).then((response) => response.json());
  },
};

export default APIServices;
