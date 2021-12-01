import React from "react";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import { handleNextPage, handleQuestionSelection } from "../redux/action";

import Background from "./background/BackgroundDefault.js";
import PageHome from "./pages/pageHome.js";
import Page from "./pages/page.js";
import Page3 from "./pages/page3/page3.js";
import PageResult from "./pages/pageResult.js";

const handleRenderSwitch = (handleButtonClick, currentPage, reduxState) => {
  // 기본 페이지는 Page
  // 애니메이션이 존재하는 경우 따로 분리 Ex: page3, page6, page8

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
        <Page
          handleButtonClick={handleButtonClick}
          reduxState={reduxState}
          currentPage={currentPage}
        ></Page>
      );
  }
};

const MoblieView = () => {
  const currentPage = useSelector((state) => state.nextPageReducer.page);
  const reduxState = useSelector(
    (state) => state.questionSelectionReducer.results
  );
  const dispatch = useDispatch();

  const handleButtonClick = (result, time) => {
    // Redux에 결과 저장
    dispatch(handleQuestionSelection(currentPage, result));

    // Fade 이벤트 후 페이지 이동
    setTimeout(() => {
      if (currentPage === "9") dispatch(handleNextPage("pageResult"));
      else dispatch(handleNextPage(parseInt(currentPage) + 1));
    }, time);
  };

  return (
    <Fragment>
      <Background currentPage={currentPage}></Background>
      {handleRenderSwitch(handleButtonClick, currentPage, reduxState)}
    </Fragment>
  );
};

export default MoblieView;
