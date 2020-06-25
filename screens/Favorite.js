import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { movieApi } from "../api";
import { View, Text } from "react-native";

export default () => {
  const [movies, setMovies] = useState({
    results: [],
    error: null,
  });
  const getData = async () => {
    const [results, error] = await movieApi.discover();
    setMovies({ results, error });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View>
      <Text>Favorite</Text>
    </View>
  );
};
