import { combineReducers } from "redux";

// import firebase from "firebase";
// import "@firebase/firestore";

import reducers from "./reducers";

import db from "../../fb/config";

// const firebaseConfig = {
//   apiKey: "AIzaSyBYFzxYn4H0eQA7DKkuPwGItBLJfKz8Hug",
//   authDomain: "nutricheck.firebaseapp.com",
//   databaseURL: "https://nutricheck.firebaseio.com",
//   projectId: "nutricheck",
//   storageBucket: "nutricheck.appspot.com",
//   messagingSenderId: "918108625952",
//   appId: "1:918108625952:web:f6e20cb78bf3d29ec67045"
// };

// firebase.initializeApp(firebaseConfig);

// export const db = firebase.firestore();

// db.collection("dishes")
//   .doc("1")
//   .onSnapshot(function(doc) {
//     var recipes = [];

//     console.log("booo", doc.data());
//   });

// async getDishes() {

// }

async function getDishes() {
  const snapshot = await db.collection("dishes").get();
  let dataRecieved = snapshot.docs.map(doc => doc.data());
  // console.log(dataRecieved, "boo000");
  return snapshot.docs.map(doc => doc.data());
}

const rootReducer = combineReducers({
  reducers: reducers,
  dishes: getDishes
});

export default rootReducer;
