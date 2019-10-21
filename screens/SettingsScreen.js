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

class SettingsScreen extends React.Component {
  render() {
    // return <Text>Recipe Info of {DishId}</Text>;
    if (this.props.dishes) {
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
    } else {
      return <ActivityIndicator />;
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
)(SettingsScreen);

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
  cardText: {
    width: 320,
    height: 80,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRightWidth: 0.2,
    // borderLeftWidth: 0.5,
    borderColor: "#B4B4B4"
  }
});

SettingsScreen.navigationOptions = {
  title: "Settings"
};
