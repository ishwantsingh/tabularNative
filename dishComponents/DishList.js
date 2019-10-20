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
            {/* <Text>oof</Text> */}
            {props.dishes &&
              props.dishes.map(dish => {
                //  console.log("boo2", dish.nut);
                //   if (dish.nut === props.nutCheck) {
                return (
                  <Text key={dish.id}>{dish.name}</Text>
                  // <DishIcon dish={dish} nutCheck={props.nutCheck} key={dish.id} />
                );
                //   } else {
                //     return <h4>No Maches Found</h4>;
                //   }
              })}
          </View>
        </ScrollView>
      </View>
    );
  } else {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
}

const mapStateToProps = state => {
  console.log("SUPERRRRRRRRRRRRR state->", state.dishes.superFinal);
  return {
    nutCheck: state.reducers,
    dishes: state.dishes.superFinal
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
