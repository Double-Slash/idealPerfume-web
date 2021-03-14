import React from "react";
import { Typography, Fade, Box } from "@material-ui/core";
import { useSelector } from "react-redux";
import { test_data, perfume_data } from "../config/data.js";

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

  return (
    <Fade in={true} timeout={2000}>
      <div
        style={{
          marginTop: "100%",
          marginLeft: 30,
          marginRight: 30,
        }}
      >
        <Typography style={{ fontSize: 30, color: "white" }}>
          결과 페이지
        </Typography>
        <Box>{perfume.TYPE}</Box>
        <Box>{perfume.BRAND}</Box>
        <Box>{perfume.NAME}</Box>
        <Box>{perfume.TOP}</Box>
        <Box>{perfume.MIDDLE}</Box>
        <Box>{perfume.BOTTOM}</Box>
      </div>
    </Fade>
  );
};

export default PageHome;
