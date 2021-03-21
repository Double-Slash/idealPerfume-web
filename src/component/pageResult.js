import React, { useEffect, useState } from "react";
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
  const [loadState, setloadState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setloadState(true);
    }, 3000);
  }, []);

  return (
    <Box className={classes.mainContainer}>
      {!loadState ? (
        <Fade in={true} timeout={2000}>
          <Box className={classes.mainContainer}>
            <Typography
              className="text"
              style={{ fontSize: 25, fontWeight: "bold", color: "white" }}
            >
              당신의 향수를 제작중입니다...
            </Typography>
          </Box>
        </Fade>
      ) : (
        <Fragment>
          <Fade in={true} timeout={5000}>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                height: "20%",
              }}
            >
              <Typography
                className="text"
                style={{ fontSize: 30, fontWeight: "bold", color: "white" }}
              >
                당신의 향수는...
              </Typography>
            </Box>
          </Fade>

          <Fade in={true} timeout={5000}>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                height: "80%",
                marginTop: 30,
              }}
            >
              <Box className={classes.perfumeContainer}>
                <img
                  style={{ width: "70%" }}
                  src={require("../image/perfume/case1.jpg")}
                ></img>
              </Box>

              <Box className={classes.perfumeInfoContainer}>
                <Typography
                  className="text"
                  style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
                >
                  이름: {perfume.NAME}
                  <br></br>
                  브랜드: {perfume.BRAND}
                  <br></br>
                  향수 타입: {perfume.TYPE}
                  <br></br>탑 노트: {perfume.TOP}
                  <br></br>
                  미들 노트: {perfume.MIDDLE}
                  <br></br>
                  바텀 노트: {perfume.BOTTOM}
                </Typography>
              </Box>
            </Box>
          </Fade>
        </Fragment>
      )}
    </Box>
  );
};

const useStyles = makeStyles({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  perfumeContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    height: "40%",
    backgroundColor: "#fff",
    borderRadius: 40,
    marginBottom: 20,
  },
  perfumeInfoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "60%",
  },
});

export default PageHome;
