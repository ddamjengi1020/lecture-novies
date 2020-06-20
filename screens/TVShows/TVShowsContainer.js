import React, { useState, useEffect } from "react";
import { tvShowApi } from "../../api";
import TVShowsPresenter from "./TVShowsPresenter";

export default () => {
  const [tvShows, setTvShows] = useState({
    loading: true,
    today: [],
    popular: [],
    thisWeek: [],
    topRated: [],
    todayError: null,
    popularError: null,
    thisWeekError: null,
    topRatedError: null,
  });
  const getData = async () => {
    const [today, todayError] = await tvShowApi.today();
    const [popular, popularError] = await tvShowApi.popular();
    const [thisWeek, thisWeekError] = await tvShowApi.thisWeek();
    const [topRated, topRatedError] = await tvShowApi.topRated();
    setTvShows({
      loading: false,
      today,
      popular,
      thisWeek,
      topRated,
      todayError,
      popularError,
      thisWeekError,
      topRatedError,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return <TVShowsPresenter {...tvShows} />;
};
