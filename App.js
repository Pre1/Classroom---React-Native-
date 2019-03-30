import React, { Component } from "react";
import { Spinner } from "native-base";
import HomePage from "./Components/HomePage";
import { Provider } from "react-redux";

import store from "./store";
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
  }
}
