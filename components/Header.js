import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const Header = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Recipe go</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Favorite")
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
    backgroundColor: "rgba(255,183,3,0.3)",
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 15,
  },
});
export default Header;
