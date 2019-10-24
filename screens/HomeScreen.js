import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Slider,
  Button
} from "react-native";
import { connect } from "react-redux";

import getInfo from "../state/actions/actionCreators";
import setData from "../state/actions/setDataAction";
import DishList from "../dishComponents/DishList";
import db from "../fb/config";

class HomeScreen extends React.Component {
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
    value6: 0,
    superFinal: []
  };

  componentDidMount() {
    // const snapshot = await db.collection("dishes").get();
    // dataRecieved = snapshot.docs.map(doc => doc.data());

    async function getDishes() {
      const snapshot = await db.collection("dishes").get();
      dataRecieved = snapshot.docs.map(doc => doc.data());

      return dataRecieved;
    }
    getDishes()
      .then(function(res) {
        let finalData = res;
        //  console.log("FINAL DATA", finalData);
        return finalData;
      })
      .then(finalData => {
        this.setState({ superFinal: finalData });
        this.props.setData(this.state.superFinal);
        // console.log("SUPER FINAL", this.state.superFinal);
      });
    // dataRecieved.then(data => {
    //   this.setState({ superFinal: data });
    // });
    //   console.log("offoooo", dataRecieved);
    // console.log("XXXXXXXXXXXX", this.state.superFinal);
  }
  handleChangeCal = e => {
    e == 1 ? this.setState({ cal: "High" }) : this.setState({ cal: "Low" });
    // console.log("cal=>", this.state.cal);
  };
  handleChangeCarb = e => {
    e == 1 ? this.setState({ carb: "High" }) : this.setState({ carb: "Low" });
    //  console.log("carb=>", this.state.carb);
  };
  handleChangeFat = e => {
    e == 1 ? this.setState({ fat: "High" }) : this.setState({ fat: "Low" });
    //  console.log("fat=>", this.state.fat);
  };
  handleChangeFiber = e => {
    e == 1 ? this.setState({ fiber: "High" }) : this.setState({ fiber: "Low" });
    // console.log("fiber=>", this.state.fiber);
  };
  handleChangeMineral = e => {
    e == 1
      ? this.setState({ mineral: "High" })
      : this.setState({ mineral: "Low" });
    //  console.log("mineral=>", this.state.mineral);
  };
  handleChangeProtein = e => {
    e == 1
      ? this.setState({ protein: "High" })
      : this.setState({ protein: "Low" });
    // console.log("protein=>", this.state.protein);
  };

  handleSubmit = () => {
    //  console.log("b", this.state);
    this.props.getInfo(
      this.state.cal,
      this.state.carb,
      this.state.fat,
      this.state.fiber,
      this.state.mineral,
      this.state.protein
    );
  };

  render() {
    // console.log("SUPER FINAL", this.state.superFinal);

    return (
      <View style={styles.container}>
        {/* <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        > */}
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

          <Button onPress={this.handleSubmit} title="Show Recipes" />
        </View>
        {/* </ScrollView> */}
        <View style={styles.borderCheck}>
          <DishList props={this.props} />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInfo: (cal, carb, fat, fiber, mineral, protein) =>
      dispatch(getInfo(cal, carb, fat, fiber, mineral, protein)),
    setData: superFinal => dispatch(setData(superFinal))
  };
};

HomeScreen.navigationOptions = {
  title: "NutriCheck",
  headerStyle: {
    backgroundColor: "#2196F3"
  },
  headerTitleStyle: {
    color: "white"
  }
};

export default connect(
  null,
  mapDispatchToProps
)(HomeScreen);

const styles = StyleSheet.create({
  borderCheck: {
    // borderWidth: 1,
    // borderColor: "black",
    marginTop: 15,
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
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
    borderColor: "#2196F3",
    borderWidth: 2,
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 2,
    borderRadius: 6,
    // alignItems: "flex-start",
    justifyContent: "center"
    // width: 150
  },
  contentContainer: {
    justifyContent: "flex-start",
    paddingTop: 5
    // borderWidth: 1,
    // borderColor: "red"
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 5,
    marginBottom: 10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 20
  },
  navigationFilename: {
    marginTop: 5
  }
});
