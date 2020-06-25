import React, { useState } from "react";
import { ScrollView, ActivityIndicator, RefreshControl } from "react-native";
import PropTypes from "prop-types";

const Loaded = ({ refreshFn, loading, children }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFn();
    setRefreshing(false);
  };

  return (
    <ScrollView
      style={{ backgroundColor: "black" }}
      contentContainerStyle={{
        flex: 1,
        justifyContent: loading ? "center" : "flex-start",
      }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={"white"}
        />
      }
    >
      {loading ? <ActivityIndicator color="white" size="small" /> : children}
    </ScrollView>
  );
};

Loaded.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  refreshFn: PropTypes.func,
};

export default Loaded;
