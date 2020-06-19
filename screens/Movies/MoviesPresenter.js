import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { Dimensions, ActivityIndicator, ScrollView } from "react-native";
import Slide from "../../components/Movies/Slide";
import ContentsTitle from "../../components/ContentsTitle";
import VContent from "../../components/VContent";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.ScrollView`
  background-color: black;
`;
const SliderContainer = styled.View`
  width: ${WIDTH};
  height: ${HEIGHT / 4};
`;
const HContainer = styled.View`
  padding: 20px;
`;

export default ({ loading, nowPlaying, popular }) => (
  <Container
    contentContainerStyle={{
      flex: 1,
      justifyContent: loading ? "center" : "flex-start",
    }}
  >
    {loading ? (
      <ActivityIndicator color="white" size="small" />
    ) : (
      <>
        <SliderContainer>
          <Swiper loop={true} timeout={4} controlsEnabled={false}>
            {nowPlaying
              .filter((movie) => movie.overview !== "")
              .map((movie) => (
                <Slide
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  vote={movie.vote_average}
                  overview={movie.overview}
                  backgroundImage={movie.backdrop_path}
                  poster={movie.poster_path}
                />
              ))}
          </Swiper>
        </SliderContainer>
        <HContainer>
          <ContentsTitle title={"인기 영화"} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {popular.map((movie) => (
              <VContent
                key={movie.id}
                title={movie.title}
                vote={movie.vote_average}
                poster={movie.poster_path}
              />
            ))}
          </ScrollView>
        </HContainer>
      </>
    )}
  </Container>
);
