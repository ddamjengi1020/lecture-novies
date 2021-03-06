import axios from "axios";

const TMDB_KEY = "22152b6831a33bb530b4d8204ab17873";
const LAN = "ko-KR";
const VIDEO = "videos";

const makeRequest = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      api_key: TMDB_KEY,
      language: LAN,
      append_to_response: VIDEO,
      ...params,
    },
  });

const getAnything = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data,
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (e) {
    return [null, e];
  }
};

export const movieApi = {
  nowPlaying: () => getAnything("/movie/now_playing"),
  popular: () => getAnything("/movie/popular"),
  upcoming: () => getAnything("/movie/upcoming"),
  search: (query) => getAnything("/search/movie", { query }),
  movie: (id) => getAnything(`/movie/${id}`),
  discover: (page) => getAnything("/discover/movie", { page }),
};

export const tvShowApi = {
  today: () => getAnything("/tv/airing_today"),
  thisWeek: () => getAnything("/tv/on_the_air"),
  topRated: () => getAnything("/tv/top_rated"),
  popular: () => getAnything("/tv/popular"),
  search: (query) => getAnything("/search/tv", { query }),
  tvShow: (id) => getAnything(`/tv/${id}`),
};

export const apiImage = (path) =>
  path
    ? `https://image.tmdb.org/t/p/w500${path}`
    : "https://determined-hypatia-502a08.netlify.app/static/media/no-poster.25f2b569.png";
