import React, { Fragment } from "react";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../page.css";

const page3 = () => {
  return (
    <Fragment>
      <div style={{ marginTop: "30%", marginLeft: 40, marginRight: 40 }}>
        <div>
          <Typography className="Text" style={{ fontSize: 25, color: "white" }}>
            <span style={{ marginTop: 0, marginBottom: 5, fontWeight: "bold" }}>
              Q.
            </span>
            <br></br>
            <span style={{ fontWeight: "bold" }}>당신은 이 액자를 </span>
            <br></br>
            <span style={{ marginTop: 0, fontWeight: "bold" }}>
              {" "}
              어디에 두시나요?
            </span>
          </Typography>
        </div>

      </div>
    </Fragment>
  );
};

export default page3;
