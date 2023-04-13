import React, { useEffect, useState, useContext } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AppContext } from "./AppContext";
import RecipeItem from "../components/RecipeItem";

const Favorite = ({ navigation }) => {
  const { favorites } = useContext(AppContext);

  //   const getFavorites = async () => {
  //     const results = favorites.map(async (element) => {
  //       try {
  //         const jsonValue = await AsyncStorage.getItem(element.id);
  //         return jsonValue != null ? JSON.parse(jsonValue) : null;
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     });

  //     return results;
  //   };

  return (
    <View style={{ flex: 1, padding: 15 }}>
      <FlatList
        data={favorites}
        renderItem={({ item }) => (
          <RecipeItem item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default Favorite;
