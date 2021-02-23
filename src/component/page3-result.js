import React, { Fragment,useEffect } from "react";
import { Fade } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { handleNextPage } from "../redux/action";

// 테이블 위 이미지
import tableFirstFrame from "../image/page3/table1-fruit.png";
import tableSecondFrame from "../image/page3/table2-flower.png";
import tableThirdFrame from "../image/page3/table3-ocean.png";
import tableFourthFrame from "../image/page3/table4-forest.png";
import tableFifthFrame from "../image/page3/table5-city.png";
import tableSixthFrame from "../image/page3/table5-city.png";

// 서랍속 이미지
import drawerFirstFrame from "../image/page3/drawer1-fruit.png";
import drawerSecondFrame from "../image/page3/drawer2-flower.png";
import drawerThirdFrame from "../image/page3/drawer3-ocean.png";
import drawerFourthFrame from "../image/page3/drawer4-forest.png";
import drawerFifthFrame from "../image/page3/drawer5-city.png";
import drawerSixthFrame from "../image/page3/drawer5-city.png";

function handleReduxStateToImage(frameChoice, frameLocation) {
  if (frameLocation == "table") {
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
        return tableSixthFrame;
      }
      default: {
        return "../image/page1/bg1.png";
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
      case 6: {
        return drawerSixthFrame;
      }
      default: {
        return "../image/page1/bg1.png";
      }
    }
  }
}

const Page3_table = () => {
  const reduxState = useSelector((state) => state);
  const dispatch = useDispatch();

  const frameChoice = reduxState.questionSelectionReducer.results[3].result;
  const frameLocation = reduxState.questionSelectionReducer.results[4].result;

  useEffect(() => {
    setTimeout(() => {
      dispatch(handleNextPage("page4"))
    }, 2500);
  }, []);

  return (
    <Fragment>
      <Fade in={true} timeout={2000}>
        <div>
          <img
            style={{
              width: "100%",
              height: "100%",
              zIndex: -1,
              position: "absolute",
              top: 0,
              left: 0,
            }}
            src={handleReduxStateToImage(frameChoice, frameLocation)}
            alt="tableBackground"
          ></img>
        </div>
      </Fade>
    </Fragment>
  );
};

export default Page3_table;
