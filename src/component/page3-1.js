import React, { Fragment } from "react";

import Page3 from "./page3"
// import base_img from "../image/page3/page3-2-flower/flower_base_layer.png";
// import border_img from "../image/page3/border.png";
// 사진 따로 없어서 일단 이렇게 대체
// 애니메이션 넣을 사진도 없음..
import base_img from "../image/page2/page3-1.png"
import page3Styles from "./page3Styles"

const Page3_1 = () => {
  const commonClasses = page3Styles();
  return (
    <Fragment>
      <div className={commonClasses.basechild}>
        
        <img className={commonClasses.background, commonClasses.background_opacity} src={base_img} alt="background" />
        {/* <img className="background border background-opacity" src={border_img} alt="border" /> */}
        
      </div>

      <Page3 />
    </Fragment>
  );
};

export default Page3_1;