import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { View, Text } from "react-native";
import { tvShowApi } from "../api";

export default () => {
  const [tvShows, setTvShows] = useState({
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
  return (
    <View>
      <Text>{tvShows.today.length}</Text>
    </View>
  );
};
