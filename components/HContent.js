import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { trimText } from "../utils";
import { TouchableOpacity } from "react-native";
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

const HContent = ({ id, title, vote, poster, overview, releaseDate }) => (
  <TouchableOpacity>
    <Container>
      <Poster url={poster} />
      <Content>
        <Title>{trimText(title, 20)}</Title>
        <ReleaseDate>{releaseDate}</ReleaseDate>
        <Vote vote={vote} />
        <Overview>{trimText(overview, 90)}</Overview>
      </Content>
    </Container>
  </TouchableOpacity>
);

HContent.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};

export default HContent;
