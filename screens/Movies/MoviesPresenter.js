import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { Dimensions, ScrollView } from "react-native";
import Loaded from "../../components/Loaded";
import Slide from "../../components/Movies/Slide";
import ContentsTitle from "../../components/ContentsTitle";
import VContent from "../../components/VContent";
import HContent from "../../components/HContent";

const { height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 3}px;
`;
const SectionContainer = styled.View`
  padding: 20px;
`;

export default ({ refreshFn, loading, nowPlaying, popular, upcoming }) => (
  <Loaded loading={loading} refreshFn={refreshFn}>
    <ScrollView showsVerticalScrollIndicator={false}>
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
                isMovie={true}
              />
            ))}
        </Swiper>
      </SliderContainer>
      <SectionContainer>
        <ContentsTitle title={"인기 영화"} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {popular.map((movie) => (
            <VContent
              key={movie.id}
              id={movie.id}
              title={movie.title}
              vote={movie.vote_average}
              poster={movie.poster_path}
              isMovie={true}
            />
          ))}
        </ScrollView>
      </SectionContainer>
      <SectionContainer>
        <ContentsTitle title={"개봉예정 영화"} />
        {upcoming
          .filter((movie) => movie.overview !== "")
          .map((movie) => (
            <HContent
              key={movie.id}
              id={movie.id}
              title={movie.title}
              vote={movie.vote_average}
              poster={movie.poster_path}
              overview={movie.overview}
              releaseDate={movie.release_date}
              isMovie={true}
            />
          ))}
      </SectionContainer>
    </ScrollView>
  </Loaded>
);
