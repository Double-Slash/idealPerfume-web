import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./redux/store"; // redux store

import Menu from "./component/menu.js";
import Content from "./component/content.js";

import WebView from "./component/webView/webView";

import "./App.css";

const App = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  // 모바일 화면 특화
  if (width > 480) {
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
