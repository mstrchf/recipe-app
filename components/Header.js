import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const Header = ({ navigation, favorites }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Recipe go</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Favorite", { favorites: favorites })
        }
      >
        <MaterialIcons name="collections-bookmark" size={28} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(52,78,65,0.8)",
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 15,
  },
});
export default Header;
