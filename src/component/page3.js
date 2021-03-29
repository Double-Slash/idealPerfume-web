import React, { Fragment, useState } from "react";
import { Fade } from "react-animation-components";
import { Button, Typography, makeStyles } from "@material-ui/core";

import commonStyles from "./commonStyles";

import Page3_1 from "./Page3/page3-1";
import Page3_2 from "./Page3/page3-2";
import Page3_3 from "./Page3/page3-3";
import Page3_4 from "./Page3/page3-4";
import Page3_5 from "./Page3/page3-5";
import Page3_6 from "./Page3/page3-6";

// 테이블 위 이미지
import tableFirstFrame from "../image/3/table1-fruit.png";
import tableSecondFrame from "../image/3/table2-flower.png";
import tableThirdFrame from "../image/3/table3-ocean.png";
import tableFourthFrame from "../image/3/table4-forest.png";
import tableFifthFrame from "../image/3/table5-city.png";

// 서랍속 이미지
import drawerFirstFrame from "../image/3/drawer1-fruit.png";
import drawerSecondFrame from "../image/3/drawer2-flower.png";
import drawerThirdFrame from "../image/3/drawer3-ocean.png";
import drawerFourthFrame from "../image/3/drawer4-forest.png";
import drawerFifthFrame from "../image/3/drawer5-city.png";

function renderChoice(frameLocation, frameChoice) {
  console.log("Page3 결과 출력", frameLocation, frameChoice);
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
    }
  }
}

const renderBackground = (result) => {
  switch (result) {
    case 1:
      return <Page3_1></Page3_1>;
    case 2:
      return <Page3_2></Page3_2>;
    case 3:
      return <Page3_3></Page3_3>;
    case 4:
      return <Page3_4></Page3_4>;
    case 5:
      return <Page3_5></Page3_5>;
    case 6:
      return <Page3_6></Page3_6>;
  }
};

const Page3 = ({ handleButtonClick, reduxState }) => {
  const classes = useStyles();
  const commonClasses = commonStyles();
  const [resultState, setResultState] = useState(false);

  const PAGE2_RESULT = reduxState[2];
  const PAGE3_RESULT = reduxState[3];

  return resultState ? (
    <Fade in={true}>
      <img
        className={commonClasses.img}
        src={renderChoice(PAGE3_RESULT, PAGE2_RESULT)}
        alt="background"
      ></img>
    </Fade>
  ) : (
    <Fade in={true}>
      <Fragment>
        {renderBackground(PAGE2_RESULT)}

        <div className={classes.root}>
          <Fade in={true} timeout={4000}>
            <div className={classes.questionRoot}>
              <Typography className={commonClasses.questionArea}>
                <span className={commonClasses.boldText}>Q.</span>
                <br></br>
                <span>당신은 </span>
                <span className={commonClasses.boldText}>이 액자를 </span>
                <br></br>
                <span>어디에 두시나요?</span>
              </Typography>
            </div>

            <div className={classes.buttonArea}>
              <Button
                className={commonClasses.styledbutton}
                onClick={() => {
                  setResultState(true);
                  handleButtonClick(1);
                }}
              >
                <Typography className={commonClasses.buttonText}>
                  매일 매일 볼 수 있는 탁자
                </Typography>
              </Button>

              <Button
                className={commonClasses.styledbutton}
                onClick={() => {
                  handleButtonClick(2);
                  setResultState(true);
                }}
              >
                <Typography className={commonClasses.buttonText}>
                  어쩌다 한 번 꺼내 볼 수 있는 서랍 속
                </Typography>
              </Button>
            </div>
          </Fade>
        </div>
      </Fragment>
    </Fade>
  );
};

const useStyles = makeStyles({
  root: {
    marginTop: "50%",
    marginLeft: 20,
    marginRight: 20,
    zIndex: 6,
    position: "absolute",
  },
  questionRoot: {
    marginLeft: 20,
    marginRight: 20,
  },
  buttonArea: {
    marginTop: "80%",
    display: "block",
  },
});

export default Page3;
