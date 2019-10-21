import React from "react";
import { View, Text } from "react-native";

const Ingre = props => (
  <View>
    {console.log(props.step)}
    <Text>{`${props.step}      `} </Text>
  </View>
);

export default Ingre;
