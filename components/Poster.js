import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { apiImage } from "../api";

const PosterImage = styled.Image`
  width: ${(props) => (props.isDetail ? "120px" : "80px")};
  height: ${(props) => (props.isDetail ? "170px" : "130px")};
  border-radius: 5px;
`;

const Poster = ({ url, isDetail }) => {
  return <PosterImage isDetail={isDetail} source={{ uri: apiImage(url) }} />;
};

Poster.propTypes = {
  url: PropTypes.string,
  isDetail: PropTypes.bool,
};

export default Poster;
