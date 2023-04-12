import { StyleSheet, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import Home from "./screens/Home";
import Detail from "./screens/Detail";
import Favorite from "./screens/Favorite";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ route, navigation }) => ({
            headerShown: false,
            title: "Recipe Go",
          })}
        />
        <Stack.Screen
          name="Favorite"
          component={Favorite}
          options={({ route, navigation }) => ({
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
