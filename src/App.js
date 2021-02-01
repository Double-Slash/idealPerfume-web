import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store"; // redux store

import Menu from "./component/Menu.js";
import Content from "./component/Content.js"

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Menu />
      <Content></Content>
    </Provider>
  );
};

export default App;
