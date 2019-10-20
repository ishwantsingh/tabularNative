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
//     //           <Popup
//     //             trigger={<button> More Info!</button>}
//     //             modal
//     //             closeOnDocumentClick
//     //             className="container-all-1"
//     //           >
//     //             <br />
//     //             <div className="container-all">
//     //               {console.log(props.dish.link)}
//     //               <h5>{props.dish.name}</h5>
//     //               <img src={props.dish.image} className="img-2" />
//     //               <iframe
//     //                 width="380"
//     //                 height="180"
//     //                 src={`${props.dish.link}`}
//     //                 frameborder="0"
//     //                 allowfullscreen
//     //               ></iframe>
//     //               <h5>Ingredients</h5>
//     //               {props.dish.ing.map(step => {
//     //                 return <Ingre step={step} key={props.dish.id} />;
//     //               })}
//     //               <h5>Recipe</h5>
//     //               {Object.keys(props.dish.steps).map((step, i) => (
//     //                 <Recipe
//     //                   step={step}
//     //                   key={i}
//     //                   value={props.dish.steps[step]}
//     //                   link={props.dish.link}
//     //                 />
//     //               ))}
//     //               <h5>Suggested Drink: {props.dish.drink}</h5>
//     //               <div>
//     //                 <a href="https://www.swiggy.com/" target="_blank">
//     //                   {" "}
//     //                   <button className="waves-effect btn">
//     //                     Get this on Swiggy!
//     //                   </button>
//     //                 </a>
//     //                 <a href="https://www.zomato.com/" target="_blank">
//     //                   <button className="waves-effect btn">
//     //                     Get this on Zomato!
//     //                   </button>
//     //                 </a>
//     //                 <a href="https://www.ubereats.com/" target="_blank">
//     //                   <button className="waves-effect btn">
//     //                     Get this on UberEats!
//     //                   </button>
//     //                 </a>
//     //               </div>
//     //               <br />
//     //               <br />
//     //             </div>
//     //           </Popup>
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
