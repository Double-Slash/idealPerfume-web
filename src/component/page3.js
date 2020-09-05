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

        <div style={{ marginTop: "100%" }}>
          <Button
            style={{
              backgroundColor: "rgba(189,195,199,0.7)",
              width: "100%",
              height: "50px",
              borderRadius: 15,
              outline: "none",
            }}
          >
            <Link
              to="/page3-table"
              style={{
                textDecoration: "none",
              }}
            >
              <Typography
                className="Text"
                style={{
                  opacity: 1,
                  color: "white",
                  fontSize: 20,
                }}
              >
                매일 매일 볼 수 있는 탁자
              </Typography>
            </Link>
          </Button>

          <Link
            to="/page3-drawer"
            style={{
              textDecoration: "none",
            }}
          >
            <Button
              style={{
                width: "100%",
                height: "50px",
                backgroundColor: "rgba(189,195,199,0.7)",
                borderRadius: 15,
                marginTop: 20,
                outline: "none",
              }}
            >
              <Typography
                className="Text"
                style={{
                  color: "white",

                  fontSize: 20,
                }}
              >
                어쩌다 한 번 꺼내 볼 수 있는 서랍 속
              </Typography>
            </Button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default page3;
