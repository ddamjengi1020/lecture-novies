import React from "react";
import styled from "styled-components/native";
import Loaded from "../../components/Loaded";
import Poster from "../../components/Poster";
import { ScrollView, Dimensions } from "react-native";
import { apiImage } from "../../api";
import { format } from "../../utils";
import ContentsTitle from "../../components/ContentsTitle";
import Vote from "../../components/Vote";

const { height: HEIGHT } = Dimensions.get("window");
const Container = styled.ScrollView``;
const Header = styled.View`
  width: 100%;
  height: ${HEIGHT / 3};
  justify-content: flex-end;
`;
const BgImage = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.2;
  position: absolute;
`;
const HeaderContent = styled.View`
  top: 40px;
  justify-content: center;
  flex-direction: row;
`;
const Info = styled.View`
  width: 40%;
  margin-left: 20px;
  justify-content: center;
`;
const Title = styled.Text`
  color: white;
  margin-bottom: 5px;
  font-size: 17px;
  font-weight: 600;
`;
const Data = styled.View`
  margin-top: 10px;
  padding: 40px;
  opacity: 0.7;
`;
const DataText = styled.Text`
  color: white;
`;
const PosterContainer = styled.View`
  padding-horizontal: 5px;
`;
const PosterName = styled.Text`
  color: white;
  font-size: 13px;
  text-align: center;
`;

export default ({ loading, result }) => {
  return (
    <Loaded loading={loading}>
      <Container showsVerticalScrollIndicator={false}>
        <Header>
          <BgImage source={{ uri: apiImage(result.backgroundImage) }} />
          <HeaderContent>
            <Poster url={result.poster} isDetail={true} />
            <Info>
              <Title>{result.title}</Title>
              <Vote vote={result.vote} />
            </Info>
          </HeaderContent>
        </Header>
        <Data>
          <ContentsTitle title={"줄거리"} />
          <DataText>{result.overview}</DataText>
          {result.release_date && (
            <>
              <ContentsTitle title={"개봉일"} />
              <DataText>{format(result.release_date)}</DataText>
            </>
          )}
          {result.first_air_date && (
            <>
              <ContentsTitle title={"첫 방송일"} />
              <DataText>{format(result.first_air_date)}</DataText>
            </>
          )}
          {result.genres && (
            <>
              <ContentsTitle title={"장르"} />
              <DataText>
                {result.genres.map((genre, i) =>
                  i === result.genres.length - 1
                    ? `${genre.name}`
                    : `${genre.name}, `
                )}
              </DataText>
            </>
          )}
          {result.seasons && (
            <>
              <ContentsTitle title={"시즌 정보"} />
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {result.seasons.map((s) => (
                  <PosterContainer key={s.id}>
                    <Poster url={s.poster_path} />
                    <PosterName>{s.name}</PosterName>
                  </PosterContainer>
                ))}
              </ScrollView>
            </>
          )}
        </Data>
      </Container>
    </Loaded>
  );
};
