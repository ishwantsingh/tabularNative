import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";

import Ingre from "../dishComponents/Ingre";

class LinksScreen extends React.Component {
  render() {
    let DishId = JSON.stringify(this.props.navigation.getParam("id", "no-id"));
    console.log(DishId);
    if (JSON.parse(DishId) <= 70 && JSON.parse(DishId) >= 0) {
      console.log(DishId);
      return (
        <ScrollView style={styles.container}>
          {this.props.dishes &&
            this.props.dishes.map(dish => {
              if (dish.id == JSON.parse(DishId)) {
                return (
                  <View style={styles.dishContainer}>
                    <Image
                      source={{ uri: `${dish.image}` }}
                      style={styles.cardImage2}
                    />
                    <Text style={{ fontSize: 30 }}>{dish.name}</Text>

                    {/* <View style={styles.cardText2}> */}
                    <View style={styles.dishHeader}>
                      <Text style={styles.text}>Ingredients</Text>
                    </View>
                    {dish.ing.map(step => {
                      return <Ingre step={step} key={JSON.parse(DishId)} />;
                    })}
                    {/* </View> */}
                  </View>
                );
              } else {
                return <View />;
              }
            })}
        </ScrollView>
      );
    } else {
      // return <Text>Recipe Info of {DishId}</Text>;
      return (
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Text style={styles.bigText}>All Dishes</Text>
          {this.props.dishes &&
            this.props.dishes.map(dish => {
              return (
                <View style={styles.card}>
                  <Image
                    source={{ uri: `${dish.image}` }}
                    style={styles.cardImage}
                  />
                  <View style={styles.cardText}>
                    <Text style={styles.text}>{dish.name}</Text>
                  </View>
                </View>
              );
            })}
        </ScrollView>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    dishes: state.dishes.superFinal
  };
};

export default connect(
  mapStateToProps,
  null
)(LinksScreen);

LinksScreen.navigationOptions = {
  title: "Links"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  bigText: {
    fontSize: 40,
    marginBottom: 10
  },
  text: {
    fontSize: 20,
    marginBottom: 10
  },
  card: {
    alignItems: "center",
    width: 320,
    height: 380,
    marginBottom: 65,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0.3,
      height: 1.5
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRightWidth: 0.2,
    borderColor: "#B4B4B4",
    elevation: 5
  },
  cardImage: {
    width: 320,
    height: 300,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6
  },
  cardImage2: {
    width: "90%",
    height: 300,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  cardText: {
    width: 320,
    height: 80,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRightWidth: 0.2,
    // borderLeftWidth: 0.5,
    borderColor: "#B4B4B4"
  },
  cardText2: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  dishHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  dishContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5
  }
});
