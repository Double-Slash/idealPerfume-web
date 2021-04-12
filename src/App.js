import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store"; // redux store

import Menu from "./component/Menu.js";
import Content from "./component/Content.js";

import WebView from "./component/webView/WebView";

import "./Font.css";

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
