import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { apiImage } from "../../api";
import Poster from "../Poster";
import { TouchableOpacity } from "react-native-gesture-handler";
import Vote from "../Vote";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  position: relative;
  width: ${WIDTH};
  height: ${HEIGHT / 4};
`;
const BgImage = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.3;
  position: absolute;
`;
const Content = styled.View`
  height: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;
const Title = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 6px;
`;
const Overview = styled.Text`
  color: white;
  opacity: 0.5;
  font-size: 13px;
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const Button = styled.View`
  background-color: #eb4d4b;
  padding: 4px 7px;
  border-radius: 3px;
`;
const ButtonText = styled.Text`
  color: white;
  font-size: 11px;
`;

const Slide = ({ id, title, backgroundImage, vote, overview, poster }) => {
  return (
    <Container>
      <BgImage source={{ uri: apiImage(backgroundImage) }} />
      <Content>
        <Poster url={poster} />
        <Data>
          <Title>
            {title.length > 14 ? `${title.slice(0, 12)}...` : title}
          </Title>
          <Vote vote={vote} />
          <Overview>
            {overview.length > 70 ? `${overview.slice(0, 70)}...` : overview}
          </Overview>
          <TouchableOpacity>
            <Button>
              <ButtonText>더보기</ButtonText>
            </Button>
          </TouchableOpacity>
        </Data>
      </Content>
    </Container>
  );
};

Slide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  overview: PropTypes.string,
  poster: PropTypes.string,
};

export default Slide;
