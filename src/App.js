import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import Menu from "./component/modules/Menu.js";
import MoblieView from "./component/moblieView.js";
import WebView from "./component/webView.js";

import "./Font.css";

const App = () => {
  // 모바일 화면 특화
  if (window.innerWidth > 480) {
    return <WebView></WebView>;
  } else {
    return (
      <Provider store={store}>
        <Menu></Menu>
        <MoblieView></MoblieView>
      </Provider>
    );
  }
};

export default App;
