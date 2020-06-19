import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import Vote from "./Vote";
import { TouchableOpacity } from "react-native";

const Container = styled.View`
  margin-horizontal: 7px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  color: white;
  margin-vertical: 5px;
`;

const VContent = ({ poster, title, vote }) => (
  <Container>
    <TouchableOpacity>
      <Poster url={poster} />
      <Title>{title.length > 8 ? `${title.slice(0, 8)}...` : title}</Title>
      <Vote vote={vote} />
    </TouchableOpacity>
  </Container>
);

VContent.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
};

export default VContent;
