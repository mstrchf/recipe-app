import React from "react";
import { StyleSheet, TextInput, View, Keyboard } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const [clicked, setClicked] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onFocus={() => {
            setClicked(true);
          }}
          onBlur={() => setClicked(false)}
        />
      </View>

      {/* cross Icon, depending on whether the search bar is clicked or not */}
      {clicked && (
        <Entypo
          name="cross"
          size={20}
          color="black"
          style={{ padding: 1 }}
          onPress={() => {
            setSearchQuery("");
          }}
        />
      )}
    </View>
  );
};

export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d9dbda",
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
  },

  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    fontSize: 20,
    marginLeft: 10,
    flex: 1,
  },
});
