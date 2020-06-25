import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvShowApi } from "../../api";

export default ({ navigation, route }) => {
  const { params } = route;
  navigation.setOptions({
    title: params.title,
  });
  return <DetailPresenter />;
};
