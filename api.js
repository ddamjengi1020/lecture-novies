import axios from "axios";

const TMDB_KEY = "22152b6831a33bb530b4d8204ab17873";

const makeRequest = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: { ...params, TMDB_KEY },
  });

const movieApi = {
  nowPlaying: () => makeRequest(),
  popular: () => makeRequest(),
  upcoming: () => makeRequest(),
  search: (word) => makeRequest(),
  movie: (id) => makeRequest(),
  discover: () => makeRequest(),
};

const tvShowApi = {
  today: () => makeRequest(),
  thisWeek: () => makeRequest(),
  topRated: () => makeRequest(),
  popular: () => makeRequest(),
  search: (word) => makeRequest(),
  tvShow: (id) => makeRequest(),
};
