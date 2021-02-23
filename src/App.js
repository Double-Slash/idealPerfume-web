import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store"; // redux store

import Menu from "./component/menu.js";
import Content from "./component/content.js"

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Menu></Menu>
      <Content></Content>
    </Provider>
  );
};

export default App;
