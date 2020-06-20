import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import Loaded from "../../components/Loaded";
import ContentsTitle from "../../components/ContentsTitle";
import VContent from "../../components/VContent";
import HContent from "../../components/HContent";

const SectionContainer = styled.View`
  padding: 20px;
`;

export default ({ loading, today, popular, thisWeek, topRated }) => (
  <Loaded loading={loading}>
    <SectionContainer>
      <ContentsTitle title={"오늘 방영 드라마"} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {today.map((tv) => (
          <VContent
            key={tv.id}
            id={tv.id}
            title={tv.name}
            vote={tv.vote_average}
            poster={tv.poster_path}
          />
        ))}
      </ScrollView>
    </SectionContainer>
    <SectionContainer>
      <ContentsTitle title={"인기 드라마"} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {popular
          .filter((tv) => tv.overview !== "")
          .map((tv) => (
            <VContent
              key={tv.id}
              id={tv.id}
              title={tv.name}
              vote={tv.vote_average}
              poster={tv.poster_path}
              overview={tv.overview}
            />
          ))}
      </ScrollView>
    </SectionContainer>
    <SectionContainer>
      <ContentsTitle title={"이번 주 방영 드라마"} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {thisWeek
          .filter((tv) => tv.overview !== "")
          .map((tv) => (
            <VContent
              key={tv.id}
              id={tv.id}
              title={tv.name}
              vote={tv.vote_average}
              poster={tv.poster_path}
              overview={tv.overview}
            />
          ))}
      </ScrollView>
    </SectionContainer>
    <SectionContainer>
      <ContentsTitle title={"순위별 드라마"} />
      {topRated
        .filter((tv) => tv.overview !== "")
        .map((tv) => (
          <HContent
            key={tv.id}
            id={tv.id}
            title={tv.name}
            vote={tv.vote_average}
            poster={tv.poster_path}
            overview={tv.overview}
            releaseDate={tv.first_air_date}
          />
        ))}
    </SectionContainer>
  </Loaded>
);
