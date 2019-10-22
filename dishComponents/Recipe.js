import React from "react";
import { View, Text } from "react-native";

const Recipe = props => (
  <View>
    <Text>{`${props.step}:      `} </Text>
    <Text>{`      ${props.value}`}</Text>
  </View>
);

export default Recipe;
//recipe component working
