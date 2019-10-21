import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from "react-native";
//import { connect } from "react-redux";

export default function DishIcon(props) {
  //  console.log("nutCheck=>", props.nutCheck);
  function isEquivalent(a, b) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
      return false;
    }

    for (var i = 0; i < aProps.length; i++) {
      var propName = aProps[i];

      // If values of same property are not equal,
      // objects are not equivalent
      if (a[propName] !== b[propName]) {
        return false;
      }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
  }
  // console.log(props.dish.nut, props.nutCheck);
  if (isEquivalent(props.dish.nut, props.nutCheck)) {
    // console.log(props.dish.image, "boonoooooo");
    //   console.log("boo2", props.navigation);

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.card}>
            <Image
              source={{ uri: `${props.dish.image}` }}
              style={styles.cardImage}
            />
            <View style={styles.cardText}>
              <Text style={styles.text}>{props.dish.name}</Text>
              <Button
                title="Go to Details"
                onPress={() =>
                  props.navigation.navigate("Links", {
                    id: props.dish.id
                  })
                }
              />
            </View>
          </View>
        </ScrollView>
      </View>

      //etzsyxrdtcfuyvgubhlinj;j;hbkgvfcd
      //   <View>

      //     <div className="row dish-card">
      //       <div className="col s12 m6 dish-card-div">
      //         <div className="card">
      //           <div className="card-image">
      //             {console.log(props.dish.image)}
      //             <img src={props.dish.image} className="img-1" />
      //           </div>
      //           <div className="card-content">
      //             <p>{props.dish.name}</p>
      //           </div>
      //
      //         </div>
      //       </div>
      //     </div>
      //   </StyledDiv>
    );
  } else return <View></View>;
}

// const mapStateToProps = state => {
//   return {
//     nutCheck: state.reducers
//   };
// };

// export default connect(
//   mapStateToProps,
//   null
// )(DishIcon);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    // borderWidth: 1,
    // borderColor: "black"
  },
  contentContainer: {
    paddingTop: 0
  },
  getStartedContainer: {
    alignItems: "center"
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
