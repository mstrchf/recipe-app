import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Animated,
  ScrollView,
  SafeAreaView,
} from "react-native";

import AnimatedHeader from "../components/AnimatedHeader";

const Detail = ({ route, navigation }) => {
  const { recipe } = route.params;
  const offset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <AnimatedHeader animatedValue={offset} recipe={recipe} navigation={navigation} />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{paddingTop: 20}}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={32}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: offset } } },
        ], {useNativeDriver: false})}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold", marginStart: 20 }}>
          Ingredients
        </Text>
        <View style={styles.ingredients}>
          {recipe.ingredients.map((ingredient) => (
            <Text
              style={{
                fontSize: 18,
                color: "rgba(0,0,0,0.65)",
                marginVertical: 2,
              }}
              key={ingredient}
            >
              {" "}
              - {ingredient}
            </Text>
          ))}
        </View>

        <Text style={{ fontSize: 22, fontWeight: "bold", marginStart: 20 }}>
          Preparation
        </Text>
        <View style={styles.instructions}>
          {recipe.instructions.map((step, index) => (
            <Text
              style={{
                fontSize: 18,
                color: "rgba(0,0,0,0.65)",
                marginVertical: 2,
              }}
              key={step}
            >
              {index + 1} - {step}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ingredients: {
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: "rgba(255,183,3,0.3)",
  },

  instructions: {
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
});

export default Detail;
