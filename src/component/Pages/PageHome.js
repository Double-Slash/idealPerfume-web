import React from "react";
import { Button, Typography, Fade, makeStyles, Box } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { handleNextPage } from "../../redux/action";

import { width, height } from "../modules/Dimentions.js";

const PageHome = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <Box style={{ marginBottom: "20%" }}>
        <Fade in={true} timeout={1000}>
          <Box className={classes.titleContainer}>
            <Typography className={classes.titleText}>
              <span>당신이 그리는</span>
              <br></br>
              <span
                style={{ marginTop: 5, fontSize: "10vw", fontWeight: "bold" }}
              >
                이상향 香
              </span>
              을<br></br>
              <span style={{ marginTop: 0 }}>찾아주는</span>
              <br></br>
              <span style={{ marginTop: 0 }}> 큐레이션 서비스</span>
              <br></br>
            </Typography>
          </Box>
        </Fade>
        <Fade in={true} timeout={7000}>
          <Button
            disableRipple={true}
            className={classes.startButton}
            onClick={() => {
              dispatch(handleNextPage("0"));
            }}
          >
            <Typography
              style={{
                fontSize: "7vw",
                fontWeight: "bold",
              }}
            >
              탭하여 테스트 시작하기
            </Typography>
          </Button>
        </Fade>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles({
  mainContainer: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    width: width,
    height: height,
    top: 0,
    left: 0,
  },
  titleContainer: {
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: "10%",
    marginRight: "10%",
  },
  titleText: {
    fontSize: "8vw",
    color: "white",
    fontFamily: "Noto Sans KR, sans-serif !important",
  },
  startButton: {
    width: "100%",
    color: "white",
    marginTop: 50,
    outline: "none",
  },
});

export default PageHome;
