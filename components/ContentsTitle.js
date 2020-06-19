import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Container = styled.View`
  padding: 15px;
`;
const Title = styled.Text`
  color: white;
  font-weight: 500;
`;

const ContentsTitle = ({ title }) => (
  <Container>
    <Title>{title}</Title>
  </Container>
);

ContentsTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ContentsTitle;
