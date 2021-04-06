import React from "react";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import { handleNextPage, handleQuestionSelection } from "../Redux/action";

import Background from "./Background.js";

import PageHome from "./Pages/PageHome";
import Page from "./Page";
import Page3 from "./Pages/Page3/Page3";
import Page8 from "./Pages/Page8";
import PageResult from "./Pages/PageResult";

const width = window.innerWidth;
const height = window.innerHeight;

const handleRenderSwitch = (handleButtonClick, currentPage, reduxState) => {
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

    case "8":
      return (
        <Page8
          handleButtonClick={handleButtonClick}
          reduxState={reduxState}
        ></Page8>
      );
    default:
      return (
        <Page
          handleButtonClick={handleButtonClick}
          reduxState={reduxState}
          currentPage={currentPage}
        ></Page>
      );
  }
};

const Content = () => {
  const currentPage = useSelector((state) => state.nextPageReducer.page);
  const reduxState = useSelector(
    (state) => state.questionSelectionReducer.results
  );
  const dispatch = useDispatch();

  const handleButtonClick = (result, time) => {
    dispatch(handleQuestionSelection(currentPage, result));
    // Fade 이벤트 후 페이지 이동
    setTimeout(() => {
      dispatch(handleNextPage(parseInt(currentPage) + 1));
    }, time);
  };

  console.log("현재 페이지: ", currentPage);
  console.log("현재 결과 state: ", reduxState);

  return (
    <Fragment>
      <Background currentPage={currentPage}></Background>
      {handleRenderSwitch(handleButtonClick, currentPage, reduxState)}
    </Fragment>
  );
};

export default Content;
