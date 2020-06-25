import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { trimText } from "../utils";
import GoToDetail from "./GoToDetail";
import Poster from "./Poster";
import Vote from "./Vote";

const Container = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`;
const Title = styled.Text`
  color: white;
  margin-vertical: 5px;
`;
const Content = styled.View`
  align-items: flex-start;
  margin-left: 15px;
  width: 70%;
  padding-right: 20px;
`;
const Overview = styled.Text`
  margin-top: 5px;
  color: white;
  opacity: 0.6;
  font-size: 12px;
`;
const ReleaseDate = styled.Text`
  color: white;
  opacity: 0.5;
  font-size: 11px;
  margin-bottom: 5px;
`;

const HContent = ({
  id,
  title,
  vote,
  poster,
  overview,
  releaseDate,
  isMovie,
}) => (
  <GoToDetail
    id={id}
    title={title}
    vote={vote}
    overview={overview}
    releaseDate={releaseDate}
    poster={poster}
    isMovie={isMovie}
  >
    <Container>
      <Poster url={poster} />
      <Content>
        <Title>{trimText(title, 20)}</Title>
        <ReleaseDate>{releaseDate}</ReleaseDate>
        <Vote vote={vote} />
        <Overview>{trimText(overview, 90)}</Overview>
      </Content>
    </Container>
  </GoToDetail>
);

HContent.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  poster: PropTypes.string,
  overview: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  isMovie: PropTypes.bool,
};

export default HContent;
