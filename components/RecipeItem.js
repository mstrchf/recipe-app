import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

const RecipeItem = ({ item, navigation }) => (
  <TouchableOpacity
    activeOpacity={0.75}
    style={styles.item}
    onPress={() => {
      navigation.navigate("Detail", {
        recipe: item,
      });
    }}
  >
    <Image
      resizeMode="cover"
      source={{ uri: item.image }}
      style={{
        width: 100,
        height: 100,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        marginEnd: 10,
      }}
    />
    <View>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.sub}>Preparation time: {item.prepTime} sec</Text>
    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  main: {
    flex: 1,
    padding: 20,
  },
  item: {
    backgroundColor: "rgba(255,183,3,0.3)",
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
  },

  sub: {
    color: "grey",
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
export default RecipeItem;
