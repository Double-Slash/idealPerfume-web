import React, { Fragment } from "react";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../page.css";

const changeRoute = (e) => {
  console.log("route");
  setTimeout(() => {
    this.props.history.push(this.props.match.path);
  }, 2000);
};

const page3_table = () => {
  return (
    <Fragment>
      <Link to="/page4" onLoad={changeRoute}></Link>
    </Fragment>
  );
};

export default page3_table;
