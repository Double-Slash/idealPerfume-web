import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../page.css";

var flag = true;

const page4_autumn = () => {
  return (
    <Fragment>
      <Link to="/page5">
        <Button id="btn" onLoad={changeRoute()}></Button>
      </Link>
    </Fragment>
  );
};

function changeRoute() {
  console.log("routing...");
  console.log(flag);
  if(flag === true){
    setTimeout(() => {
      document.getElementById("btn").click();
    }, 3000);
    flag = false;
  }
}

flag = true;

export default page4_autumn ;
