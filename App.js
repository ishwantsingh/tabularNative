import React from "react";
import { Provider } from "react-redux";

import store from "./state/store";
import NavigationContainer from "./NavigationContainer";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer />
      </Provider>
    );
  }
}
