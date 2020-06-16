import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { Dimensions, ActivityIndicator } from "react-native";

const { width, height } = Dimensions.get("screen");
const Container = styled.View`
  background-color: black;
  flex: 1;
  justify-content: center;
`;
const Header = styled.View`
  width: 100%;
  height: ${height / 3.5}px;
`;
const Section = styled.View`
  background-color: green;
  flex: 1;
`;
const Text = styled.Text``;

export default ({ loading, nowPlaying }) => (
  <Container>
    {loading ? (
      <ActivityIndicator color="white" size="small" />
    ) : (
      <Header>
        <Swiper loop={true} timeout={4} controlsEnabled={false}>
          {nowPlaying.map((movie) => (
            <Section key={movie.id}>
              <Text>{movie.title}</Text>
            </Section>
          ))}
        </Swiper>
      </Header>
    )}
  </Container>
);
