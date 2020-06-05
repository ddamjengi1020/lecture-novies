import React from "react";
import styled from "styled-components";
import { View, Text, Button } from "react-native";

export default ({ navigation }) => (
  <View style={{ backgroundColor: "black", flex: 1 }}>
    <Text>Movies</Text>
    <Button
      onPress={() => navigation.navigate("Detail")}
      title="Detail"
    ></Button>
  </View>
);
