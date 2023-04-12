import React from "react";
import { Text, StyleSheet, Animated } from "react-native";

const MAX_HEADER_HEIGHT = 300;
const MIN_HEADER_HEIGHT = 100;
const Scroll_Distance = MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT;

const AnimatedHeader = ({ animatedValue, recipe }) => {
  const headerHeight = animatedValue.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT],
    extrapolate: "clamp",
  });
  return (
    // <Animated.View style={{
    //     position: 'absolute',
    //     top: 0,
    //     left: 0,
    //     right: 0,
    //     zIndex: 10,
    //     height: headerHeight,
    //     backgroundColor: 'lightblue'
    // }}/>

    <Animated.Image
      source={{ uri: recipe.image }}
      style={{
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        height: headerHeight,
        paddingBottom: 20,
        zIndex: 1,
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default AnimatedHeader;
