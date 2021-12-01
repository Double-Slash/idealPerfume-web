import React, { Fragment } from "react";
import classNames from "classnames";

import { Fade, Loop } from "react-animation-components";

import forest from "../../../image/3/page3-4-forest/forest.png";
import light_img from "../../../image/3/page3-4-forest/forest_light_layer.png";
import forest_base from "../../../image/3/page3-4-forest/forest_base_layer.png";
import forest_tree from "../../../image/3/page3-4-forest/forest_tree_layer.png";
import border_img from "../../../image/3/border.png";
import page3Styles from "./page3Styles";

const Forest = () => {
  const commonClasses = page3Styles();
  return (
    <Fragment>
      <div
        className={classNames(
          commonClasses.basechild,
          commonClasses.background_opacity
        )}
      >
        <img
          className={commonClasses.background}
          style={{ zIndex: 1 }}
          src={forest_base}
          alt="forest_base"
        />
        <img
          className={commonClasses.background}
          style={{ zIndex: 3 }}
          src={forest_tree}
          alt="forest_tree"
        />
        <div className={commonClasses.lightchild}>
          <Loop in interval={1250}>
            <Fade>
              <img
                className={commonClasses.lightimg}
                src={light_img}
                alt="light"
              />
            </Fade>
          </Loop>
        </div>
        <img
          className={classNames(commonClasses.background, commonClasses.border)}
          src={border_img}
          alt="border"
        />
      </div>
    </Fragment>
  );
};

export default Forest;
