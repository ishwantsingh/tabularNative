import { combineReducers } from "redux";

import firebase from "firebase";
import "@firebase/firestore";

import reducers from "./reducers";

const firebaseConfig = {
  apiKey: "AIzaSyBYFzxYn4H0eQA7DKkuPwGItBLJfKz8Hug",
  authDomain: "nutricheck.firebaseapp.com",
  databaseURL: "https://nutricheck.firebaseio.com",
  projectId: "nutricheck",
  storageBucket: "nutricheck.appspot.com",
  messagingSenderId: "918108625952",
  appId: "1:918108625952:web:f6e20cb78bf3d29ec67045"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

console.log(db.collection("dishes").doc("1"), "boo");

const rootReducer = combineReducers({
  reducers
});

export default rootReducer;
