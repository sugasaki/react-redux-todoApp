import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "./src/Home/store";
//import Main from './src/Home/components/Main'
import Home from "./src/Home/homeContainer";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}