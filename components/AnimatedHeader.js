import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  Animated,
  View,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const MAX_HEADER_HEIGHT = 300;
const MIN_HEADER_HEIGHT = 50;
const Scroll_Distance = MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT;

const AnimatedHeader = ({
  animatedValue,
  recipe,
  navigation,
  setFavorites,
}) => {
  const headerHeight = animatedValue.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT],
    extrapolate: "clamp",
  });

  const [bookmarked, setBookmarked] = useState(false);
  return (
    <View style={styles.container}>
      <Animated.Image
        source={{ uri: recipe.image }}
        style={{
          width: "100%",
          justifyContent: "flex-end",
          alignItems: "center",
          height: headerHeight,
          paddingBottom: 50,
          zIndex: 1,
        }}
      />

      <View style={styles.sub}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-outline" size={36} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>{recipe.name}</Text>
        <TouchableOpacity
          onPress={() => {
            if (!bookmarked) alert("Recipe added to favorites");

            setBookmarked(!bookmarked);
            setFavorites((prev) => [...prev, recipe]);
          }}
        >
          <MaterialIcons
            name={bookmarked ? "bookmark" : "bookmark-outline"}
            size={32}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
  },

  back: {
    position: "absolute",
    zIndex: 10,
    top: 24,
    left: 15,
  },

  sub: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(52,78,65,0.8)",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default AnimatedHeader;
