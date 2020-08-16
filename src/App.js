import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import ReactPlayer from "react-player";
import { IconButton } from "@material-ui/core";

import "./animate.css";

import Background from "./component/background";
import WebView from "./component/webView";
import PageHome from "./component/pageHome";
import Page0_0 from "./component/page0-0";
import Page0_1 from "./component/page0-1";
import Page1 from "./component/page1";
import Page2 from "./component/page2";
import Page3 from "./component/page3";
import Page3_table from "./component/page3-table";
import Page3_drawer from "./component/page3-drawer";
import Page4 from "./component/page4";
import Page4_spring from "./component/page4-spring";
import Page4_summer from "./component/page4-summer";
import Page4_autumn from "./component/page4-autumn";
import Page4_winter from "./component/page4-winter";
import Page5 from "./component/page5";
import Page6 from "./component/page6";
import Forest from "./component/Forest"
import BGM from "./music/bgm1.mp3";
import MusicOn from "@material-ui/icons/MusicNote";
import MusicOFF from "@material-ui/icons/MusicOff";
import Back from "@material-ui/icons/ArrowBackIos";

const routes = [
  { path: "/webView", name: "webView", Component: WebView },
  { path: "/", name: "PageHome", Component: PageHome },
  { path: "/page0-0", name: "page0-0", Component: Page0_0 },
  { path: "/page0-1", name: "page0-1", Component: Page0_1 },
  { path: "/page1", name: "page1", Component: Page1 },
  { path: "/page2", name: "page2", Component: Page2 },
  { path: "/page3", name: "page3", Component: Page3 },
  { path: "/page3-table", name: "page3-table", Component: Page3_table },
  { path: "/page3-drawer", name: "page3-drawer", Component: Page3_drawer },
  { path: "/page4", name: "page4", Component: Page4 },
  { path: "/page4-spring", name: "page4", Component: Page4_spring },
  { path: "/page4-summer", name: "page4", Component: Page4_summer },
  { path: "/page4-autumn", name: "page4", Component: Page4_autumn },
  { path: "/page4-winter", name: "page4", Component: Page4_winter },
  { path: "/page5", name: "page5", Component: Page5 },
  { path: "/page6", name: "page6", Component: Page6 },
  { path: "/forest", name: "forest", Component: Forest },

];

const App = () => {
  // 음악 재생 state
  var [musicFlag, setMusicFlag] = useState(false);

  return (
    <Fragment>
      <Router>
        <Background></Background>

        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={2000}
                classNames="fade"
                unmountOnExit
              >
                <div className="page">
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </Router>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "5%",
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <IconButton
          color="inherit"
          aria-label="back"
          onClick={() => {
            goBack();
          }}
        >
          <Back fontSize="large" style={{ fill: "white" }}></Back>
        </IconButton>

        <IconButton
          color="inherit"
          aria-label="musicOn"
          onClick={() => {
            if (musicFlag === false) {
              setMusicFlag(true);
            } else {
              setMusicFlag(false);
            }
          }}
        >
          {musicFlag ? (
            <MusicOn fontSize="large" style={{ fill: "white" }}></MusicOn>
          ) : (
            <MusicOFF fontSize="large" style={{ fill: "white" }}></MusicOFF>
          )}
        </IconButton>
      </div>

      <ReactPlayer
        url={BGM} // Carried - Lauren Duski
        width="100%"
        height="100px"
        controls={false}
        loop={true}
        playing={musicFlag ? true : false}
      ></ReactPlayer>
    </Fragment>
  );
};

// 이전 페이지로
function goBack() {
  window.history.back();
}

export default App;
