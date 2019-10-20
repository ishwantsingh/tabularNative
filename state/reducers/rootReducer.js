//import React from "react";
import { combineReducers } from "redux";
//import { Text, View } from "react-native";

import reducers from "./reducers";
import setDataReducer from "./setDataReducer";
//import db from "../../fb/config";

// class FillReducer extends React.Component {
//   state = {
//     superfinal: []
//   };

//   async componentDidMount() {
//     const snapshot = await db.collection("dishes").get();
//     dataRecieved = snapshot.docs.map(doc => doc.data());

//     console.log("offoooo", dataRecieved);
//   }
//   render() {
//     return (
//       <View>
//         <Text>oh mama</Text>
//       </View>
//     );
//   }
// }

// async function getDishes() {
//   const snapshot = await db.collection("dishes").get();
//   dataRecieved = snapshot.docs.map(doc => doc.data());

//   return dataRecieved;
// }

// let superFinal = [];
// getDishes()
//   .then(function(res) {
//     let finalData = res;
//     console.log("FINAL DATA", finalData);
//     return finalData;
//   })
//   .then(finalData => {
//     superFinal = finalData;
//     console.log("SUPER FINAL", superFinal);
//   });

const rootReducer = combineReducers({
  reducers: reducers,
  dishes: setDataReducer
});

export default rootReducer;
