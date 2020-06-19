import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { apiImage } from "../api";

const PosterImage = styled.Image`
  width: 14vh;
  height: 20vh;
  border-radius: 5px;
`;

const Poster = ({ url }) => {
  return <PosterImage source={{ uri: apiImage(url) }} />;
};

Poster.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Poster;
