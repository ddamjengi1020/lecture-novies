import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { Platform } from "react-native";

const TextInput = styled.TextInput`
  background-color: white;
  border-radius: 20px;
  width: 70%;
  padding: 10px 15px;
  font-size: 15px;
  ${(props) => (props.platform ? "outline-width: 0" : "")};
`;

const Input = ({ placeholder, value, onChange, onSubmit }) => {
  return (
    <TextInput
      platform={Platform.OS === "web" ? 1 : 0}
      value={value}
      onChangeText={onChange}
      onSubmitEditing={onSubmit}
      placeholder={placeholder}
      returnKeyType={"search"}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Input;
