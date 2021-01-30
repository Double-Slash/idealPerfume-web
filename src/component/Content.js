import React from "react";
import { Fragment,useState } from "react";
import {useSelector} from 'react-redux'

import Background from "./Background";

import WebView from "./webView";
import PageHome from "./PageHome";
import Page0_0 from "./Page0-0";
import Page0_1 from "./Page0-1";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3_1 from "./Page3-1";
import Page3_2 from "./Page3-2";
import Page3_3 from "./Page3-3";
import Page3_4 from "./Page3-4";
import Page3_5 from "./Page3-5";
import Page3_6 from "./Page3-6";
import Page3_table from "./page3-table";
import Page3_drawer from "./page3-drawer";
import Page4 from "./page4";
import Page4_season from "./page4-season";
import Page5 from "./page5";
import Page6 from "./page6";
import Page6_situation from "./page6-situation";
import Page7 from "./page7";
import Page7_time from "./page7-time";
import Page8 from "./page8";
import Page9 from "./page9";

const Content = (props) => {
  const reduxState = useSelector((state)=>state);
  
  let currentPage = reduxState.currentPageReducer.page
  console.log(currentPage)

  return (
    <Fragment>
      <Background currentPage={currentPage}></Background>
      {renderSwitch(currentPage)}
    </Fragment>
  );
};

function renderSwitch(currentPage) {
  switch (currentPage) {
    case "pageHome":
      return <PageHome></PageHome>;
      break;
    case "page0-0":
      return <Page0_0></Page0_0>;
      break;
    case "page0-1":
      return <Page0_1></Page0_1>;
      break;
  }
}

export default Content;
