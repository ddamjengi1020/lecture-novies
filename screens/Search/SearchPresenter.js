import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import Loaded from "../../components/Loaded";
import Input from "../../components/Input";
import ContentsTitle from "../../components/ContentsTitle";
import VContent from "../../components/VContent";

const Container = styled.ScrollView`
  flex: 1;
  background-color: black;
`;
const SectionContainer = styled.View`
  padding: 20px;
`;
const NotFound = styled.View`
  padding-top: 10px;
  padding-left: 20px;
`;
const NotFoundText = styled.Text`
  color: white;
`;

export default ({ loading, movies, tvShows, keyword, onChange, onSubmit }) => (
  <Container>
    <Input
      placeholder={"test"}
      onChange={onChange}
      onSubmit={onSubmit}
      value={keyword}
    />
    {!loading ? (
      <>
        <SectionContainer>
          <ContentsTitle title={"영화"} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {movies.length === 0 ? (
              <NotFound>
                <NotFoundText>-Not Found!</NotFoundText>
              </NotFound>
            ) : (
              movies
                .filter((movie) => movie.poster_path !== null)
                .map((movie) => (
                  <VContent
                    key={movie.id}
                    id={movie.id}
                    poster={movie.poster_path}
                    title={movie.title}
                    vote={movie.vote_average}
                  />
                ))
            )}
          </ScrollView>
        </SectionContainer>
        <SectionContainer>
          <ContentsTitle title={"드라마"} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {tvShows.length === 0 ? (
              <NotFound>
                <NotFoundText>-Not Found!</NotFoundText>
              </NotFound>
            ) : (
              tvShows
                .filter((movie) => movie.poster_path !== null)
                .map((tvShow) => (
                  <VContent
                    key={tvShow.id}
                    id={tvShow.id}
                    title={tvShow.name}
                    vote={tvShow.vote_average}
                    poster={tvShow.poster_path}
                  />
                ))
            )}
          </ScrollView>
        </SectionContainer>
      </>
    ) : null}
  </Container>
);
