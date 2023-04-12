import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

import data from "../data/recipe";
import SearchBar from "../components/SearchBar";

const Item = ({ item, navigation }) => (
  <TouchableOpacity activeOpacity={0.75} style={styles.item} onPress={() => navigation.navigate('Detail', {recipe: item})}>
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

const Home = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredData = data.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
      
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <Text>Search or select a recipe from below</Text>
      <FlatList
        data={filteredData}
        renderItem={({ item }) => <Item item={item} navigation={navigation} />}
        // keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
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
    color: 'grey'
  }
});

export default Home;
