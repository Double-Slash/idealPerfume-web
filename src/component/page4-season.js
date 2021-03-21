import React, { Fragment,useEffect} from "react";
import { Fade } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { handleNextPage } from "../redux/action";
import commonStyles from "./commonStyles"

import spring from "../image/page4/bg4-spring.png";
import summer from "../image/page4/bg4-summer.png";
import autumn from "../image/page4/bg4-autumn.png";
import winter from "../image/page4/bg4-winter.png";

function selectSeasonToBackground(seasonChoice) {
  switch (seasonChoice) {
    case "spring": {
      return spring;
    }
    case "summer": {
      return summer;
    }
    case "autumn": {
      return autumn;
    }
    case "winter": {
      return winter;
    }
    default: {
      return "../image/page1/bg1.png";
    }
  }
}

const Page4_winter = () => {
  const commonClasses = commonStyles();
  const reduxState = useSelector((state) => state);
  const dispatch = useDispatch();
  const seasonChoice = reduxState.questionSelectionReducer.results[5].result;

  useEffect(() => {
    setTimeout(() => {
      dispatch(handleNextPage("page5"))
    }, 2500);
  }, []);

  return (
    <Fragment>
      <Fade in={true} timeout={2000}>
        <div>
          <img className={commonClasses.img}
            src={selectSeasonToBackground(seasonChoice)}
            alt="seasonBackground"
          ></img>
        </div>
      </Fade>
    </Fragment>
  );
};

export default Page4_winter;
