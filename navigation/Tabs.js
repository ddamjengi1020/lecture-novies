import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Movies from "../screens/Movies";
import TVShows from "../screens/TVShows";
import Search from "../screens/Search";
import Favorite from "../screens/Favorite";
import { Platform } from "react-native";

const Tab = createBottomTabNavigator();
const getRouteTitle = (route) =>
  route?.state?.routeNames[route.state.index] || "Movies";

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: getRouteTitle(route),
    });
  }, [route]);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";
          switch (route.name) {
            case "Movies":
              iconName += "film";
              break;
            case "TVShows":
              iconName += "tv";
              break;
            case "Search":
              iconName += "search";
              break;
            case "Favorite":
              iconName += "heart";
              break;
            default:
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={30}
              color={focused ? "white" : "gray"}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "black",
          borderTopColor: "black",
        },
      }}
    >
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="TVShows" component={TVShows} />
      <Tab.Screen name="Favorite" component={Favorite} />
    </Tab.Navigator>
  );
};
