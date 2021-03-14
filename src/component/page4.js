import React, { Fragment } from "react";
import { Button, Typography, Fade } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { handleNextPage, handleQuestionSelection } from "../redux/action";

import frame from "../image/page4/frame.png";

import commonStyles from "./commonStyles";

function handleReduxState(dispatch, result) {
  dispatch(handleNextPage("page4-result"));
  dispatch(handleQuestionSelection("page4", result));
}

const Page4 = () => {
  const commonClasses = commonStyles();
  const dispatch = useDispatch();

  return (
    <Fragment>
      <img
        className="frame"
        style={{
          height: "100%",
          display: "absolute",
          zIndex: -1,
          top: 0,
          left: 0,
        }}
        src={frame}
        alt="frame"
      ></img>

      <Fade in={true} timeout={3000}>
        <div style={{ marginTop: "30%", marginLeft: 50, marginRight: 50 }}>
          <Typography className="Text" style={{ fontSize: 25, color: "white" }}>
            <span style={{ marginTop: 0, marginBottom: 5, fontWeight: "bold" }}>
              Q.
            </span>
            <br></br>
            <span>당신을 닮은</span>
            <br></br>
            <span style={{ marginTop: 0, fontWeight: "bold" }}>
              계절은 언제인가요?
            </span>
          </Typography>

          <div
            style={{
              marginTop: "40%",
              marginLeft: 60,
              marginRight: 60,
            }}
          >
            <Button
              className={commonClasses.styledbutton}
              onClick={() => handleReduxState(dispatch, 1)}
            >
              <Typography
                className="Text"
                style={{
                  color: "white",
                  fontSize: 20,
                }}
              >
                봄
              </Typography>
            </Button>

            <Button
              className={commonClasses.styledbutton}
              onClick={() => handleReduxState(dispatch, 2)}
            >
              <Typography
                className="Text"
                style={{
                  color: "white",
                  fontSize: 20,
                }}
              >
                여름
              </Typography>
            </Button>

            <Button
              className={commonClasses.styledbutton}
              onClick={() => handleReduxState(dispatch, 3)}
            >
              <Typography
                className="Text"
                style={{
                  color: "white",
                  fontSize: 20,
                }}
              >
                가을
              </Typography>
            </Button>

            <Button
              className={commonClasses.styledbutton}
              onClick={() => handleReduxState(dispatch, 4)}
            >
              <Typography
                className="Text"
                style={{
                  color: "white",
                  fontSize: 20,
                }}
              >
                겨울
              </Typography>
            </Button>
          </div>
        </div>
      </Fade>
    </Fragment>
  );
};

export default Page4;
