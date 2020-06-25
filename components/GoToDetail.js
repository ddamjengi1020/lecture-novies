import React from "react";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const GoToDetail = ({
  id,
  title,
  vote,
  poster,
  overview,
  releaseDate,
  backgroundImage,
  isMovie,
  children,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={navigation.navigate("Detail", {
        id,
        title,
        vote,
        poster,
        overview,
        releaseDate,
        backgroundImage,
        isMovie,
      })}
    >
      {children}
    </TouchableOpacity>
  );
};

GoToDetail.propTypes = {
  id: PropTypes.number.isRequired,
  vote: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
  overview: PropTypes.string,
  releaseDate: PropTypes.string,
  backgroundImage: PropTypes.string,
  isMovie: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default GoToDetail;
