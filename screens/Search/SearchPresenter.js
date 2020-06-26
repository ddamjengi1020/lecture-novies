import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
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
const InputContainer = styled.View`
  align-items: center;
  margin-top: 10px;
`;

export default ({ loading, movies, tvShows, keyword, onChange, onSubmit }) => (
  <Container>
    <InputContainer>
      <Input
        placeholder={"검색어를 입력해주세요"}
        onChange={onChange}
        onSubmit={onSubmit}
        value={keyword}
      />
    </InputContainer>
    {!loading ? (
      <>
        <SectionContainer>
          <ContentsTitle title={"영화"} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {movies.length === 0 ? (
              <NotFound>
                <NotFoundText>검색어가 포함되는 영화가 없습니다</NotFoundText>
              </NotFound>
            ) : (
              movies.map((movie) => (
                <VContent
                  key={movie.id}
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                  vote={movie.vote_average}
                  isMovie={true}
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
                <NotFoundText>검색어가 포함되는 드라마가 없습니다</NotFoundText>
              </NotFound>
            ) : (
              tvShows.map((tvShow) => (
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
