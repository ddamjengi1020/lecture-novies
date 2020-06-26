import React, { useState, useEffect } from "react";
import { movieApi } from "../../api";
import FavsPresenter from "./FavsPresenter";

export default () => {
  const [movies, setMovies] = useState({
    loading: true,
    results: [],
  });
  const [page, setPage] = useState(1);
  const getData = async (pageNum) => {
    const [getMovies, getMoviesError] = await movieApi.discover(pageNum);
    setMovies({
      loading: false,
      results: [...movies.results, ...getMovies],
    });
  };
  useEffect(() => {
    getData(page);
  }, [page]);
  return <FavsPresenter {...movies} nextPage={setPage} />;
};
