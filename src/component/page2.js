import React from "react";
import { makeStyles } from "@material-ui/core";
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import { useDispatch } from "react-redux";
import { handleNextPage, handleQuestionSelection } from "../Redux/action";

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

const Page2 = (props) => {
  const classes = useStyles();
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
    <div className={classes.pictureContainer} {...bind()}>
      {/* map에 key 추가 */}
      {frames.map((src, index) => {
        console.log(`${src.substring(31, 38)}`);
        console.log(src,index)
        return (
          <animated.img
            className={classes.picture}
            src={src}
            key={src.substring(31, 38)}
            style={{
              // width: window.innerWidth / 2,
              // height: window.innerHeight / 2.5,
              ...styles,
            }}
            onClick={() => {
              props.handleButtonClick(index + 1);
              dispatch(handleNextPage(`${src.substring(31, 38)}`));
              dispatch(
                handleQuestionSelection("2", parseInt(src.substring(37, 38)))
              );
            }}
          />
        );
      })}
    </div>
  );
};

const useStyles = makeStyles({
  pictureContainer: {
    marginTop: "5%",
    display: "flex",
    overflowX: "scroll",
    width: "100%",
    padding: "5% 5% 5% 5%",
  },
  picture: {
    margin: "5% 5% 5% 5%",
    backgroundSize: "cover",
    backgroundRepeat: "no - repeat",
    backgroundPosition: "center",
  },
});

export default Page2;
