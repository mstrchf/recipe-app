import { StyleSheet, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useState, useMemo, useEffect } from "react";

import Home from "./screens/Home";
import Detail from "./screens/Detail";
import Favorite from "./screens/Favorite";
import { AppContext } from "./screens/AppContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function App() {
  const [favorites, setFavorites] = useState([]);
  const contextValue = useMemo(
    () => ({ favorites, setFavorites }),
    [favorites, setFavorites]
  );

  const getAllKeys = async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
      return keys;
    } catch (e) {
      console.log(e);
    }
  };

  const getMyObject = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // read error
    }

    console.log("Done.");
  };

  useEffect(() => {
    let fav = [];
    getAllKeys()
      .then((keys) => {
        console.log( keys);
        keys.forEach((key) => {
          console.log(key);
          getMyObject(key)
            .then((obj) => fav.push(obj))
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => {
        console.log(error);
      });

      setFavorites(fav)
  }, []);

  return (
    <NavigationContainer>
      <AppContext.Provider value={contextValue}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
              headerShown: true,
              title: "Recipe Go",
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Favorite")}
                >
                  <Ionicons name="bookmarks" size={28} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="Favorite"
            component={Favorite}
            options={({ navigation }) => ({
              title: "Favorites",
              headerTitleAlign: "center",
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons
                    name="arrow-back-circle-outline"
                    size={34}
                    color="black"
                  />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={({ route, navigation }) => ({
              headerShown: false,
            })}
          />
        </Stack.Navigator>
      </AppContext.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
