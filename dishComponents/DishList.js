import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";

function DishList(props) {
  console.log("nutCheck=>", props.nutCheck);
  console.log("props =>", props);
  //  console.log("props =>", Object.values(props.dishes));

  if (props.dishes) {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.getStartedContainer}>
            <Text>oof</Text>
          </View>
        </ScrollView>
      </View>
    );
  } else {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
}

const mapStateToProps = state => {
  console.log("state->", state);
  return {
    nutCheck: state.reducers,
    dishes: state.getDishes
  };
};

export default connect(
  mapStateToProps,
  null
)(DishList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 30
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  }
});
