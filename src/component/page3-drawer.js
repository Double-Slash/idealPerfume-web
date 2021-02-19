import React, { Fragment } from "react";
import { Fade } from "@material-ui/core";
import { useSelector } from "react-redux";

import firstFrame from "../image/page3/drawer1-fruit.png";
import secondFrame from "../image/page3/drawer2-flower.png";
import thirdFrame from "../image/page3/drawer3-ocean.png";
import fourthFrame from "../image/page3/drawer4-forest.png";
import fifthFrame from "../image/page3/drawer5-city.png";
import sixthFrame from "../image/page3/drawer5-city.png";

function handleReduxStateToImage(prevPage) {
  switch (prevPage) {
    case 1: {
      return firstFrame;
    }
    case 2: {
      return secondFrame;
    }
    case 3: {
      return thirdFrame;
    }
    case 4: {
      return fourthFrame;
    }
    case 5: {
      return fifthFrame;
    }
    case 6: {
      return sixthFrame;
    }
    default: {
      return "../image/page1/bg1.png";
    }
  }
}

const Page3_drawer = () => {
  const reduxState = useSelector((state) => state);
  let prevPage = reduxState.questionSelectionReducer.results[3].result;

  return (
    <Fragment>
      <Fade in={true} timeout={2000}>
        <img
          style={{
            width: "100%",
            height: "100%",
            zIndex: -1,
            position: "absolute",
            top: 0,
            left: 0,
          }}
          src={handleReduxStateToImage(prevPage)}
          alt="background"
        ></img>
      </Fade>
    </Fragment>
  );
};

export default Page3_drawer;
