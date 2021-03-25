import React, { useState, useEffect } from "react";
import { Fragment } from "react";

import { useSelector } from "react-redux";

import Background from "./Background.js";

import PageHome from "./pageHome";
import Page from "./Page";
import Page0_1 from "./page0-1";
import Page1 from "./page1";
import Page2 from "./Page2";
import Page3_1 from "./page3-1";
import Page3_2 from "./page3-2";
import Page3_3 from "./page3-3";
import Page3_4 from "./page3-4";
import Page3_5 from "./page3-5";
import Page3_6 from "./page3-6";
import Page3_result from "./page3-result";
import Page4 from "./page4";
import Page4_season from "./page4-season";
import Page5 from "./page5";
import Page6 from "./page6";
import Page6_situation from "./page6-situation";
import Page7 from "./page7";
import Page7_time from "./page7-time";
import Page8 from "./page8";
import Page9 from "./page9";
import PageResult from "./pageResult";

function renderSwitch(currentPage) {
  switch (currentPage) {
    case "pageHome":
      return <PageHome></PageHome>;
    case "pageResult":
      return <PageResult></PageResult>;
    default:
      return <Page page={currentPage}></Page>;
  }
}

const Content = (props) => {
  const currentPage = useSelector((state) => state.nextPageReducer);
  const reduxState = useSelector((state) => state.questionSelectionReducer);

  console.log("현재 결과 state: ", reduxState);
  console.log("현재 페이지", currentPage);

  return (
    <Fragment>
      <Background currentPage={currentPage.page}></Background>
      {renderSwitch(currentPage.page)}
    </Fragment>
  );
};

export default Content;
