import React from "react";
import { Provider } from "react-redux";

import store from "./state/store";
import NavigationContainer from "./NavigationContainer";
//import db from "./fb/config";

export default class App extends React.Component {
  // async componentDidMount() {
  //   const snapshot = await db.collection("dishes").get();
  //   let dataRecieved = snapshot.docs.map(doc => doc.data());
  //   console.log(dataRecieved, "boo");
  //   return snapshot.docs.map(doc => doc.data());
  // }

  render() {
    console.log("boo");
    return (
      <Provider store={store}>
        <NavigationContainer />
      </Provider>
    );
  }
}
