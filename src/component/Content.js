import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";

import Background from "./background";

import PageHome from "./pageHome";
import Page0_0 from "./page0-0";
import Page0_1 from "./page0-1";
import Page1 from "./page1";
import Page2 from "./page2";
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

function renderSwitch(currentPage) {
  switch (currentPage) {
    case "pageHome":
      return <PageHome></PageHome>;
    case "page0-0":
      return <Page0_0></Page0_0>;
    case "page0-1":
      return <Page0_1></Page0_1>;
    case "page1":
      return <Page1></Page1>;
    case "page2":
      return <Page2></Page2>;
    case "page3-1":
      return <Page3_1></Page3_1>;
    case "page3-2":
      return <Page3_2></Page3_2>;
    case "page3-3":
      return <Page3_3></Page3_3>;
    case "page3-4":
      return <Page3_4></Page3_4>;
    case "page3-5":
      return <Page3_5></Page3_5>;
    case "page3-6":
      return <Page3_6></Page3_6>;
    case "page3-result":
      return <Page3_result></Page3_result>;
    case "page4":
      return <Page4></Page4>;
    case "page4-result":
      return <Page4_season></Page4_season>;
    case "page5":
      return <Page5></Page5>;
    case "page6":
      return <Page6></Page6>;
    case "page6-result":
      return <Page6_situation></Page6_situation>;
    case "page7":
      return <Page7></Page7>;
    case "page7-result":
      return <Page7_time></Page7_time>;
    case "page8":
      return <Page8></Page8>;
    case "page9":
      return <Page9></Page9>;
  }
}

const Content = (props) => {
  const reduxState = useSelector((state) => state);
  let currentPage = reduxState.nextPageReducer.page;
  console.log("현재 redux state: ", reduxState);

  return (
    <Fragment>
      <Background currentPage={currentPage}></Background>
      {renderSwitch(currentPage)}
    </Fragment>
  );
};

export default Content;
