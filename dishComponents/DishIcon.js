// import React from "react";
// import { ScrollView, StyleSheet, Text, View, Button } from "react-native";
// import { connect } from "react-redux";

// function DishIcon(props) {
//   console.log("nutCheck=>", props.nutCheck);
//   //   function isEquivalent(a, b) {
//   //     // Create arrays of property names
//   //     var aProps = Object.getOwnPropertyNames(a);
//   //     var bProps = Object.getOwnPropertyNames(b);

//   //     // If number of properties is different,
//   //     // objects are not equivalent
//   //     if (aProps.length != bProps.length) {
//   //       return false;
//   //     }

//   //     for (var i = 0; i < aProps.length; i++) {
//   //       var propName = aProps[i];

//   //       // If values of same property are not equal,
//   //       // objects are not equivalent
//   //       if (a[propName] !== b[propName]) {
//   //         return false;
//   //       }
//   //     }

//   //     // If we made it this far, objects
//   //     // are considered equivalent
//   //     return true;
//   //   }
//   //   // console.log(props.dish.nut, props.nutCheck);
//   //   if (isEquivalent(props.dish.nut, props.nutCheck)) {
//   return (
//     <View style={styles.container}>
//       <ScrollView
//         style={styles.container}
//         contentContainerStyle={styles.contentContainer}
//       >
//         <View style={styles.getStartedContainer}>
//           <Text>oof</Text>
//         </View>
//       </ScrollView>
//     </View>

//     //etzsyxrdtcfuyvgubhlinj;j;hbkgvfcd
//     //   <View>
//     //     {console.log("boo3", props)}

//     //     <div className="row dish-card">
//     //       <div className="col s12 m6 dish-card-div">
//     //         <div className="card">
//     //           <div className="card-image">
//     //             {console.log(props.dish.image)}
//     //             <img src={props.dish.image} className="img-1" />
//     //           </div>
//     //           <div className="card-content">
//     //             <p>{props.dish.name}</p>
//     //           </div>
//     //
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </StyledDiv>
//   );
//   //   } else return <div></div>;
// }

// const mapStateToProps = state => {
//   return {
//     nutCheck: state.reducers
//   };
// };

// export default connect(
//   mapStateToProps,
//   null
// )(DishIcon);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff"
//   },
//   contentContainer: {
//     paddingTop: 30
//   },
//   getStartedContainer: {
//     alignItems: "center",
//     marginHorizontal: 50
//   }
// });
