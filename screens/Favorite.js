import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Item = ({ item, navigation }) => (
  <TouchableOpacity
    activeOpacity={0.75}
    style={styles.item}
    onPress={() =>
      navigation.navigate("Detail", {
        recipe: item,
      })
    }
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

const Favorite = ({ route, navigation }) => {
  const { favorites } = route.params;
  //   const [favorites, setFavorites] = useState([]);

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
    <View style={{flex: 1, padding: 15}}>
      <FlatList
        data={favorites}
        renderItem={({ item }) => <Item item={item} navigation={navigation} />}
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
