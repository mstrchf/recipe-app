import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
 
} from "react-native";


import data from "../data/recipe";
import SearchBar from "../components/SearchBar";
import RecipeItem from "../components/RecipeItem";

const Home = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const filteredData = data.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* <Header navigation={navigation}/> */}

      <View style={styles.main}>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <Text>Search or select a recipe from below</Text>
        <FlatList
          data={filteredData}
          renderItem={({ item }) => (
            <RecipeItem
              item={item}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

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

export default Home;
