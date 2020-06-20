import React from "react";
import { ScrollView, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";

const Loaded = ({ loading, children }) => (
  <ScrollView
    style={{ backgroundColor: "black" }}
    contentContainerStyle={{
      flex: 1,
      justifyContent: loading ? "center" : "flex-start",
    }}
  >
    {loading ? <ActivityIndicator color="white" size="small" /> : children}
  </ScrollView>
);

Loaded.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Loaded;
