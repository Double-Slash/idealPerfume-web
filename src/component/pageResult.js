import React from "react";
import { Typography, Fade, Box, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { test_data, perfume_data } from "../config/data.js";
import { Fragment } from "react";

let resultData = {
  case1: 0,
  case2: 0,
  case3: 0,
  case4: 0,
  case5: 0,
  case6: 0,
  case7: 0,
  case8: 0,
  case9: 0,
  case10: 0,
  case11: 0,
  case12: 0,
  case13: 0,
  case14: 0,
  case15: 0,
  case16: 0,
  case17: 0,
  case18: 0,
  case19: 0,
  case20: 0,
  case21: 0,
};

const width = window.outerWidth;
const height = window.outerHeight;

// 객체, 배열 순차 탐색 - burte force
const resultAlgorithm = (resultState, test_data) => {
  const result = resultState.results;

  for (const key in test_data) {
    if (test_data.hasOwnProperty(key)) {
      const perfumeCase = test_data[key]; // 향수 케이스 1개 가져옴
      console.log(key, " 탐색: ", perfumeCase);

      for (const page in perfumeCase) {
        // 1개의 케이스를 결과 배열과 순차 비교
        const perfumeCaseArr = perfumeCase[page];

        if (perfumeCaseArr.includes(result[page])) {
          resultData[key] += 1; // true 값 개수 저장
        }
      }
    }
  }

  console.log(resultData);
  // 최대 값 가져오기
  let perfume,
    max = 0;
  for (const key in resultData) {
    if (resultData[key] > max) {
      max = resultData[key];
      perfume = key;
    }
  }
  return perfume_data[perfume.substr(4, perfume.length)];
};

const PageHome = (props) => {
  const resultState = useSelector((state) => state.questionSelectionReducer);
  const perfume = resultAlgorithm(resultState, test_data);
  const classes = useStyles();

  return (
    <Fade in={true} timeout={2000}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <div className={classes.perfumeContainer}>
          <img
            style={{ width: "70%" }}
            src={require("../image/perfume/case1.jpg")}
          ></img>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Fade in={true} timeout={3000}>
            <Typography
              className="text"
              style={{ fontSize: 30, fontWeight: "bold", color: "white" }}
            >
              당신이 고른 향수는...
            </Typography>
          </Fade>
          <Fade in={true} timeout={6000}>
            <Fragment>
              <Typography
                className="text"
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                <div>이름: {perfume.NAME}</div>
                <div>브랜드: {perfume.BRAND}</div>
              </Typography>

              <Typography
                className="text"
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                <div>향수 타입: {perfume.TYPE}</div>
                <div>탑 노트: {perfume.TOP}</div>
                <div>미들 노트: {perfume.MIDDLE}</div>
                <div>바텀 노트: {perfume.BOTTOM}</div>
              </Typography>
            </Fragment>
          </Fade>
        </div>
      </Box>
    </Fade>
  );
};

const useStyles = makeStyles({
  perfumeContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    height: "30%",
    backgroundColor: "#fff",
    border: "1px solid #fff",
    borderRadius: 40,
  },
});

export default PageHome;
