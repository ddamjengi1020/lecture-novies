import React, { useLayoutEffect, useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import * as WebBrowser from "expo-web-browser";
import { movieApi, tvShowApi } from "../../api";
import { imdbLink } from "../../utils";

export default ({
  navigation,
  route: {
    params: { id, title, overview, vote, backgroundImage, poster, isMovie },
  },
}) => {
  const [detail, setDetail] = useState({
    loading: true,
    getDetailError: null,
    result: {
      id,
      title,
      overview,
      vote,
      backgroundImage,
      poster,
    },
  });
  const getData = async () => {
    const [getDetail, getDetailError] = isMovie
      ? await movieApi.movie(id)
      : await tvShowApi.tvShow(id);
    setDetail({
      loading: false,
      getDetailError,
      result: {
        ...getDetail,
        title: getDetail.title || getDetail.name,
        overview: getDetail.overview,
        vote: getDetail.vote_average,
        backgroundImage: getDetail.backdrop_path,
        poster: getDetail.poster_path,
      },
    });
  };
  const openUrl = async (url) =>
    await WebBrowser.openBrowserAsync(imdbLink(url));
  useEffect(() => {
    getData();
  }, [id]);
  useLayoutEffect(() => {
    navigation.setOptions({ title: title });
  }, []);
  return <DetailPresenter {...detail} openUrlFn={openUrl} />;
};
