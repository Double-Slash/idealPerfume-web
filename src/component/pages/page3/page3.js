import React, { Fragment, useState } from "react";
import { Fade } from "react-animation-components";
import { Button, Typography, makeStyles, Box } from "@material-ui/core";

import Page3Frame1 from "./Page3-1";
import Page3Frame2 from "./Page3-2";
import Page3Frame3 from "./Page3-3";
import Page3Frame4 from "./Page3-4";
import Page3Frame5 from "./Page3-5";
import Page3Frame6 from "./Page3-6";

// 테이블 위 이미지
import tableFirstFrame from "../../../image/3/table1-fruit.png";
import tableSecondFrame from "../../../image/3/table2-flower.png";
import tableThirdFrame from "../../../image/3/table3-ocean.png";
import tableFourthFrame from "../../../image/3/table4-forest.png";
import tableFifthFrame from "../../../image/3/table5-city.png";

// 서랍속 이미지
import drawerFirstFrame from "../../../image/3/drawer1-fruit.png";
import drawerSecondFrame from "../../../image/3/drawer2-flower.png";
import drawerThirdFrame from "../../../image/3/drawer3-ocean.png";
import drawerFourthFrame from "../../../image/3/drawer4-forest.png";
import drawerFifthFrame from "../../../image/3/drawer5-city.png";
import SixthFrame from "../../../image/default/default.png";

import { width, height } from "../../modules/Dimentions.js";

const selectLocationToBackground = (frameLocation, frameChoice) => {
  if (frameLocation === 1) {
    switch (frameChoice) {
      case 1: {
        return tableFirstFrame;
      }
      case 2: {
        return tableSecondFrame;
      }
      case 3: {
        return tableThirdFrame;
      }
      case 4: {
        return tableFourthFrame;
      }
      case 5: {
        return tableFifthFrame;
      }
      case 6: {
        return SixthFrame;
      }
      default:
        return;
    }
  } else {
    switch (frameChoice) {
      case 1: {
        return drawerFirstFrame;
      }
      case 2: {
        return drawerSecondFrame;
      }
      case 3: {
        return drawerThirdFrame;
      }
      case 4: {
        return drawerFourthFrame;
      }
      case 5: {
        return drawerFifthFrame;
      }
      case 6: {
        return SixthFrame;
      }
      default:
        return;
    }
  }
};

const renderBackgroundAfterChoice = (fadeState, reduxState) => {
  if (!fadeState) {
    return (
      <Fade in={true} timeout={1000}>
        <img
          src={selectLocationToBackground(reduxState[3], reduxState[2])}
          style={{
            width: "100%",
            height: "100%",
            zIndex: -1,
            position: "absolute",
            top: 0,
            left: 0,
          }}
          alt={"After"}
        ></img>
      </Fade>
    );
  }
};

const renderBackground = (result) => {
  switch (result) {
    case 1:
      return <Page3Frame1></Page3Frame1>;
    case 2:
      return <Page3Frame2></Page3Frame2>;
    case 3:
      return <Page3Frame3></Page3Frame3>;
    case 4:
      return <Page3Frame4></Page3Frame4>;
    case 5:
      return <Page3Frame5></Page3Frame5>;
    case 6:
      return <Page3Frame6></Page3Frame6>;
    default:
      return;
  }
};

const Page3 = ({ handleButtonClick, reduxState }) => {
  const classes = useStyles();
  const [fadeState, setFadeState] = useState(true);

  const PAGE2_RESULT = reduxState[2];

  return (
    <Fragment>
      <Fade in={fadeState}>
        {renderBackground(PAGE2_RESULT)}

        <Box className={classes.mainContainer}>
          <Fade in={true} timeout={4000}>
            <Box className={classes.questionArea}>
              <Typography className={classes.questionAreaText}>
                <span>당신은 </span>
                <span style={{ fontWeight: "bold" }}>이 액자를 </span>
                <br></br>
                <span>어디에 두시나요?</span>
              </Typography>
            </Box>

            <Box className={classes.normalButtonArea}>
              <Button
                className={classes.normalButton}
                onClick={() => {
                  handleButtonClick(1, 2500);
                  setFadeState(false);
                }}
              >
                <Typography className={classes.normalButtonText}>
                  매일 매일 볼 수 있는 탁자
                </Typography>
              </Button>

              <Button
                className={classes.normalButton}
                onClick={() => {
                  handleButtonClick(2, 2500);
                  setFadeState(false);
                }}
              >
                <Typography className={classes.normalButtonText}>
                  어쩌다 한 번 꺼내 볼 수 있는 서랍 속
                </Typography>
              </Button>
            </Box>
          </Fade>
        </Box>
      </Fade>

      {renderBackgroundAfterChoice(fadeState, reduxState)}
    </Fragment>
  );
};

const useStyles = makeStyles({
  mainContainer: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: width,
    height: height,
    top: 0,
    left: 0,
    zIndex:10
  },
  questionArea: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    height: height * 0.5,
    width: width * 0.8,
    zIndex: 10,
  },
  questionAreaText: {
    color: "white",
    fontSize: "3vh",
    fontFamily: "Binggrae, sans-serif !important",
    textShadow: "4px 3px 3px rgba(1,1,1,0.2)",
  },
  normalButtonArea: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.6,
    width: width * 0.8,
    zIndex: 10,
  },
  normalButton: {
    backgroundColor: "rgba(189,195,199,0.3)",
    width: "100%",
    height: "10%",
    marginTop: "7%",
    padding: "5%",
    outline: "none",
    boxShadow: "4px 4px 3px rgba(1,1,1,0.3)",
    borderRadius: 15,
    "&:hover": {
      backgroundColor: "rgba(189,195,199,0.3)",
    },
    "&:active": {
      backgroundColor: "rgba(189,195,199,0.3)",
    },
  },
  normalButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Binggrae, sans-serif !important",
  },
});

export default Page3;
