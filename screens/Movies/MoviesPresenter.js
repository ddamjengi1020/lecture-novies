import React from "react";
import styled from "styled-components";
import { Button } from "react-native";

const Container = styled.View``;

export default () => {
  return (
    <Container>
      <Button
        onPress={() => navigation.navigate("Detail")}
        title="Detail"
      ></Button>
    </Container>
  );
};
