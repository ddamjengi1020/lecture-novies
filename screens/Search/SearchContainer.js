import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvShowApi } from "../../api";

export default () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState({
    loading: true,
    movies: [],
    tvShows: [],
    moviesError: null,
    tvShowsError: null,
  });
  const onChange = (text) => setKeyword(text);
  const search = async () => {
    const [movies, moviesError] = await movieApi.search(keyword);
    const [tvShows, tvShowsError] = await tvShowApi.search(keyword);
    setResults({
      loading: false,
      movies,
      tvShows,
      moviesError,
      tvShowsError,
    });
  };

  return (
    <SearchPresenter
      {...results}
      keyword={keyword}
      onChange={onChange}
      onSubmit={search}
    />
  );
};
