import React, { useEffect, useState, Fragment } from "react";
import { Typography, Fade, Box, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { test_data, perfume_data } from "../../data/resultsData.js";

import { width, height } from "../modules/Dimentions.js";

import KakaoShareButton from "../modules/KakaoShareButtonUI.js";

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
  console.log("알고리즘 시작");
  const result = resultState.results;
  for (const key in test_data) {
    if (test_data.hasOwnProperty(key)) {
      const perfumeCase = test_data[key]; // 향수 케이스 1개 가져옴

      for (const page in perfumeCase) {
        // 1개의 케이스를 결과 배열과 순차 비교
        const perfumeCaseArr = perfumeCase[page];

        if (perfumeCaseArr.includes(result[page.substr(4)])) {
          resultData[key] += 1; // true 값 개수 저장
        }
      }
    }
  }

  // 최대 값 가져오기
  let perfume,
    max = 0;
  for (const key in resultData) {
    if (resultData[key] > max) {
      max = resultData[key];
      perfume = key;
    }
  }

  return perfume_data[perfume.substr(4)];
};

const PageHome = () => {
  const resultState = useSelector((state) => state.questionSelectionReducer);
  const classes = useStyles();
  const [loadState, setloadState] = useState(false);
  const perfume = resultAlgorithm(resultState, test_data);

  useEffect(() => {
    setTimeout(() => {
      setloadState(true);
    }, 2500);
  }, []);

  useEffect(() => {
    const script = document.createElement("script"); // script 태그 만듬
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box className={classes.mainContainer}>
      {!loadState ? (
        <Fade in={true} timeout={2000}>
          <Typography
            className={classes.fontDefault}
            style={{
              fontSize: "6.5vw",
            }}
          >
            당신의 향수를 제작중입니다..
          </Typography>
        </Fade>
      ) : (
        <Fragment>
          <Fade in={true} timeout={5000}>
            <Box className={classes.upperContainer}>
              <Typography
                className={classes.fontDefault}
                style={{
                  fontSize: "3vh",
                  fontWeight: "bold",
                }}
              >
                {perfume.DESC}..
              </Typography>
            </Box>
          </Fade>

          <Fade in={true} timeout={5000}>
            <Box className={classes.lowerContainer}>
              <Box className={classes.perfumeImgContainer}>
                <img
                  style={{ width: "60%" }}
                  alt={"향수"}
                  src={require(`../../image/perfume/${perfume.NUM}.jpg`)}
                ></img>
              </Box>

              <Box className={classes.perfumeInfoContainer}>
                <Typography
                  className={classes.fontDefault}
                  style={{
                    fontSize: "3vh",
                  }}
                >
                  {perfume.BRAND}
                </Typography>
                <Typography
                  className={classes.fontDefault}
                  style={{
                    fontSize: "4vh",
                    fontWeight: "bold",
                  }}
                >
                  {perfume.NAME}
                </Typography>
                <Typography
                  className={classes.fontDefault}
                  style={{
                    fontSize: "2.2vh",
                  }}
                >
                  TYPE: {perfume.TYPE}
                </Typography>
              </Box>
              <Box className={classes.perfumeDetailContainer}>
                <Typography
                  className={classes.fontDefault}
                  style={{
                    fontSize: "2.0vh",
                    fontWeight: "bold",
                  }}
                >
                  Notes / 원료
                </Typography>
                <Typography
                  className={classes.fontDefault}
                  style={{
                    fontSize: "2.0vh",
                    textAlign: "center",
                  }}
                >
                  TOP: {perfume.TOP}
                  <br></br>
                  MIDDLE: {perfume.MIDDLE}
                  <br></br>
                  BOTTOM: {perfume.BASE}
                </Typography>
              </Box>
              <Box className={classes.buttonContainer}>
                <KakaoShareButton></KakaoShareButton>
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
  upperContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: height * 0.15,
    paddingBottom: "3%",
  },
  lowerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: width,
    height: height * 0.85,
  },
  perfumeImgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    height: "40%",
    backgroundColor: "#fff",
    borderRadius: 40,
    boxShadow: "0px 5px 25px rgba(1,1,1,0.2)",
  },
  perfumeInfoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: "30%",
  },
  perfumeDetailContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "90%",
    height: "20%",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    width: "70%",
    height: "10%",
  },
  fontDefault: {
    color: "white",
    fontFamily: "Binggrae, sans-serif !important",
    textShadow: "2px 3px 3px rgba(1,1,1,0.2)",
  },
});

export default PageHome;
