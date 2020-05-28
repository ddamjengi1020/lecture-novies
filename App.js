import React, { useState } from "react";
import { AppLoading } from "expo";
import { Text, Image } from "react-native";
import { Asset } from "expo-asset";

const cacheImages = (images) => {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(images).downloadAsync();
    }
  });
};
export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1590634331662-660d6992a9f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    ]);
    return Promise.all([...images]);
  };
  const onFinish = () => setIsReady(true);
  return isReady ? (
    <Text>Its Ready!</Text>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onError={console.error}
      onFinish={onFinish}
    />
  );
}
