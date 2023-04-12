import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import Home from "./screens/Home";
import Detail from "./screens/Detail";
import Favorite from "./screens/Favorite";
import {} from "react-native";

const Stack = createNativeStackNavigator();

const customHeader = () => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Favorite" component={Favorite} />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={({ route, navigation }) => ({
            title: route.params.recipe.name,
            headerTitleAlign: "center",
            headerRight: () => (
              <TouchableOpacity onPress={() => alert('Bookmarked')}>
                <MaterialCommunityIcons
                  name="bookmark-box-multiple"
                  size={28}
                  color="black"
                />
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-circle-outline" size={34} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
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
