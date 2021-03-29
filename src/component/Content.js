import React from "react";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Fade } from "@material-ui/core";

import { handleNextPage, handleQuestionSelection } from "../Redux/action";

import Background from "./Background.js";

import PageHome from "./PageHome";
import Page from "./Page";
import Page3 from "./Page3";
import Page4 from "./page4";
import Page4_season from "./page4-season";
import Page6 from "./page6";
import Page6_situation from "./page6-situation";
import Page7 from "./page7";
import Page7_time from "./page7-time";
import Page8 from "./page8";
import Page9 from "./page9";
import PageResult from "./PageResult";

const width = window.innerWidth;
const height = window.innerHeight;
console.log(width, height);

const renderSwitch = (handleButtonClick, currentPage, reduxState) => {
  // 기본은 Page
  // 애니메이션이 존재하는 경우 따로 분리 Ex: page3
  switch (currentPage) {
    case "pageHome":
      return <PageHome></PageHome>;
    case "pageResult":
      return <PageResult></PageResult>;
    case "3":
      return (
        <Page3
          handleButtonClick={handleButtonClick}
          reduxState={reduxState}
        ></Page3>
      );
    default:
      return (
        <Page handleButtonClick={handleButtonClick} page={currentPage}></Page>
      );
  }
};

const Content = () => {
  const currentPage = useSelector((state) => state.nextPageReducer.page);
  const reduxState = useSelector(
    (state) => state.questionSelectionReducer.results
  );
  const dispatch = useDispatch();

  const handleButtonClick = (result) => {
    dispatch(handleQuestionSelection(currentPage, result));

    // Fade 이벤트 후 페이지 이동
    setTimeout(() => {
      dispatch(handleNextPage(parseInt(currentPage) + 1));
    }, 1100);
  };

  console.log("현재 결과 state: ", reduxState);
  console.log("현재 페이지", currentPage);

  return (
    <Fade in={true} timeout={3000}>
      <Fragment>
        <Background currentPage={currentPage}></Background>
        {renderSwitch(handleButtonClick, currentPage, reduxState)}
      </Fragment>
    </Fade>
  );
};

export default Content;
