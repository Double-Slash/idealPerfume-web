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
    case 1: {
      return spring;
    }
    case 2: {
      return summer;
    }
    case 3: {
      return autumn;
    }
    case 4: {
      return winter;
    }
    default: {
      return "../image/page1/bg1.png";
    }
  }
}

const Page4_winter = () => {
  const commonClasses = commonStyles();
  const seasonChoice = useSelector((state) => state.questionSelectionReducer.results["page4"]);
  const dispatch = useDispatch();

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
