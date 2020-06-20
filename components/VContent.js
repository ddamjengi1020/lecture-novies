import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { trimText } from "../utils";
import Poster from "./Poster";
import Vote from "./Vote";

const Container = styled.View`
  margin-right: 14px;
  align-items: center;
`;
const Title = styled.Text`
  color: white;
  margin-vertical: 5px;
`;

const VContent = ({ id, poster, title, vote }) => (
  <TouchableOpacity>
    <Container>
      <Poster url={poster} />
      <Title>{trimText(title, 8)}</Title>
      <Vote vote={vote} />
    </Container>
  </TouchableOpacity>
);

VContent.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
};

export default VContent;
