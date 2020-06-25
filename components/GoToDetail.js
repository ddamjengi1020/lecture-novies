import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GoToDetail = ({
  id,
  title,
  vote,
  poster,
  overview,
  releaseDate,
  backgroundImage,
  children,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Detail", {
          id,
          title,
          vote,
          poster,
          overview,
          releaseDate,
          backgroundImage,
        })
      }
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
  children: PropTypes.node.isRequired,
};

export default GoToDetail;
