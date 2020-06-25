import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { trimText } from "../utils";
import GoToDetail from "./GoToDetail";
import Poster from "./Poster";
import Vote from "./Vote";
import { View, Text } from "react-native";

const Container = styled.View`
  margin-right: 14px;
  align-items: center;
`;
const Title = styled.Text`
  color: white;
  margin-vertical: 5px;
`;

const VContent = ({ id, poster, title, vote, isMovie }) => (
  <GoToDetail
    id={id}
    poster={poster}
    title={title}
    vote={vote}
    isMovie={isMovie}
  >
    <Container>
      <Poster url={poster} />
      <Title>{trimText(title, 6)}</Title>
      <Vote vote={vote} />
    </Container>
  </GoToDetail>
);

VContent.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  vote: PropTypes.number,
  isMovie: PropTypes.bool,
};

export default VContent;
