import React, { Fragment } from "react";
import { Typography, Fade } from "@material-ui/core";
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import commonStyles from "./commonStyles";
import { useSelector, useDispatch } from "react-redux";
import { handleNextPage, handleQuestionSelection } from "../redux/action";


import firstFrame from "../image/page2/page3-1.png";
import secondFrame from "../image/page2/page3-2.png";
import thirdFrame from "../image/page2/page3-3.png";
import fourthFrame from "../image/page2/page3-4.png";
import fifthFrame from "../image/page2/page3-5.png";
import sixthFrame from "../image/page2/page3-6.png";

const frames = [
  firstFrame,
  secondFrame,
  thirdFrame,
  fourthFrame,
  fifthFrame,
  sixthFrame,
];

const Page2 = () => {
  const commonClasses = commonStyles();
  const reduxState = useSelector((state) => state);
  console.log(reduxState);
  const toNum = reduxState.questionSelectionReducer.results[0].result;
  const dispatch = useDispatch();
  const [styles, set] = useSpring(() => ({
    width: window.innerWidth / 2,
    height: window.innerHeight / 2.5,
    transform: "perspective(500px) rotateY(0deg)",
    boxShadow: "5px 5px 15px grey",
  }));

  // frame 들의 기울기 최대를 15deg로 제한
  const limit = (value, clampAt = 15) => {
    if (value > 0) {
      return value > clampAt ? clampAt : value;
    } else {
      return value < -clampAt ? -clampAt : value;
    }
  };

  const bind = useScroll((event) => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? limit(event.delta[0]) : 0
      }deg)`,
      boxShadow: 20,
    });
  });

  return (
    <Fragment>
      <Fade in={true} timeout={5000}>
        <div>
          <div className={commonClasses.root}>
            <Typography className={commonClasses.questionArea}>
              <span className={commonClasses.boldText}>Q.</span>
              <br></br>
              <span>당신이 좋아하는</span>
              <br></br>
              <span className={commonClasses.boldText}>풍경이 담긴 액자가</span>
              <br></br>
              <span>걸려있습니다.</span>
              <br></br>
              <span className={commonClasses.boldText}>어떤 장소</span>
              <span>인가요?</span>
            </Typography>
          </div>

          <div className="pictureContainer" {...bind()}>
            {/* map에 key 추가 */}
            {frames.map((src) => {
              console.log(src);
              console.log(`${src.substring(31, 38)}`);
              return (
                <animated.img
                  className="picture"
                  src={src}
                  style={{
                    // width: window.innerWidth / 2,
                    // height: window.innerHeight / 2.5,
                    ...styles,
                  }}
                  onClick={() => {
                    dispatch(handleNextPage(`${src.substring(31, 38)}`));
                    dispatch(handleQuestionSelection("page2", toNum));
                  }}
                />
              );
            })}
          </div>
        </div>
      </Fade>
    </Fragment>
  );
};

export default Page2;
