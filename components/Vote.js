import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const VoteText = styled.Text`
  color: white;
  opacity: 0.5;
  font-size: 11px;
`;

const Vote = ({ vote }) => <VoteText>⭐{vote ? vote : "-"} / 10</VoteText>;

Vote.propTypes = {
  vote: PropTypes.number.isRequired,
};

export default Vote;
