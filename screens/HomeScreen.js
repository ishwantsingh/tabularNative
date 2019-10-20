import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Slider,
  Switch
} from "react-native";
//import { Slider } from "react-native-elements";

import { MonoText } from "../components/StyledText";

export default class HomeScreen extends React.Component {
  state = {
    cal: "Low",
    carb: "Low",
    fat: "Low",
    fiber: "Low",
    mineral: "Low",
    protein: "Low",
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
    value5: 0,
    value6: 0
  };
  handleChangeCal = e => {
    e == 1 ? this.setState({ cal: "High" }) : this.setState({ cal: "Low" });
    console.log("cal=>", this.state.cal);
  };
  handleChangeCarb = e => {
    e == 1 ? this.setState({ carb: "High" }) : this.setState({ carb: "Low" });
    console.log("carb=>", this.state.carb);
  };
  handleChangeFat = e => {
    e == 1 ? this.setState({ fat: "High" }) : this.setState({ fat: "Low" });
    console.log("fat=>", this.state.fat);
  };
  handleChangeFiber = e => {
    e == 1 ? this.setState({ fiber: "High" }) : this.setState({ fiber: "Low" });
    console.log("fiber=>", this.state.fiber);
  };
  handleChangeMineral = e => {
    e == 1
      ? this.setState({ mineral: "High" })
      : this.setState({ mineral: "Low" });
    console.log("mineral=>", this.state.mineral);
  };
  handleChangeProtein = e => {
    e == 1
      ? this.setState({ protein: "High" })
      : this.setState({ protein: "Low" });
    console.log("protein=>", this.state.protein);
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.getStartedContainer}></View>
          <View style={styles.sliderCon}>
            <View style={styles.sliderCon2}>
              <View style={styles.sliderStyle}>
                <Text>Cal</Text>
                <Slider
                  value={this.state.value1}
                  step={1}
                  onValueChange={this.handleChangeCal}
                  testID="cal"
                />
                <Text>Value: {this.state.cal}</Text>
              </View>
              <View style={styles.sliderStyle}>
                <Text>Carb</Text>
                <Slider
                  value={this.state.value2}
                  step={1}
                  onValueChange={this.handleChangeCarb}
                  testID="carb"
                />
                <Text>Value: {this.state.carb}</Text>
              </View>
              <View style={styles.sliderStyle}>
                <Text>Fat</Text>
                <Slider
                  value={this.state.value3}
                  step={1}
                  onValueChange={this.handleChangeFat}
                  testID="fat"
                />
                <Text>Value: {this.state.fat}</Text>
              </View>
            </View>
            <View style={styles.sliderCon2}>
              <View style={styles.sliderStyle}>
                <Text>Fiber</Text>
                <Slider
                  value={this.state.value4}
                  step={1}
                  onValueChange={this.handleChangeFiber}
                  testID="fiber"
                />
                <Text>Value: {this.state.fiber}</Text>
              </View>
              <View style={styles.sliderStyle}>
                <Text>Mineral</Text>
                <Slider
                  value={this.state.value5}
                  step={1}
                  onValueChange={this.handleChangeMineral}
                  testID="mineral"
                />
                <Text>Value: {this.state.mineral}</Text>
              </View>
              <View style={styles.sliderStyle}>
                <Text>Protein</Text>
                <Slider
                  value={this.state.value6}
                  step={1}
                  onValueChange={this.handleChangeProtein}
                  testID="protein"
                />
                <Text>Value: {this.state.protein}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  title: "Home"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  sliderCon: {
    flexDirection: "column",
    flexWrap: "wrap"
  },
  sliderCon2: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  sliderStyle: {
    flex: 1,
    borderColor: "black",
    borderWidth: 2,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 6,
    // alignItems: "flex-start",
    justifyContent: "center"
    // width: 150
  },
  // slider1: { step: 1 },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
