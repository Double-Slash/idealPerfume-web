import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./Redux/store"; // redux store

import Menu from "./component/Menu.js";
import Content from "./component/Content.js";

import WebView from "./component/WebView/WebView";

import "./App.css";

const App = () => {
  // 모바일 화면 특화
  if (window.innerWidth > 480) {
    return <WebView></WebView>;
  } else {
    return (
      <Provider store={store}>
        <Menu></Menu>
        <Content></Content>
      </Provider>
    );
  }
};

export default App;
