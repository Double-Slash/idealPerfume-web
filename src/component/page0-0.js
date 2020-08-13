import React, { Fragment } from "react";
import { Button, Typography, Fade } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../page.css";

const Page0_0 = () => {
  return (
    <Fragment>
      <div style={{ marginTop: "30%", marginLeft: 50, marginRight: 50 }}>
        <Fade in={true} timeout={5000}>
          <Typography className="Text" style={{ fontSize: 27, color: "white" }}>
            <span style={{ marginTop: 0, marginBottom: 5, fontWeight: "bold" }}>
              Q.
            </span>
            <br></br>
            <span style={{ fontWeight: "bold" }}>누구</span>를 위한<br></br>
            <span style={{ marginTop: 0 }}> 선물인가요?</span>
          </Typography>
        </Fade>

        <Fade in={true} timeout={8000}>
          <div style={{ marginTop: "80%" }}>
            <Link
              to="/page0-1"
              style={{

                textDecoration: "none",
              }}
            >
              <Button
                className="Button"
                style={{
                  backgroundColor: "rgba(189,195,199,0.7)",
                  width: "100%",
                  height: "50px",
                  borderRadius: 15,
                }}
              >
                <Typography
                  className="Text"
                  style={{
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  나를 위한 선물
                </Typography>
              </Button>
            </Link>

            <Link
              to="/page0-1"
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                style={{
                  width: "100%",
                  height: "50px",
                  borderRadius: 15,
                  backgroundColor: "rgba(189,195,199,0.7)",
                  marginTop: 20,
                }}
              >
                <Typography
                  className="Text"
                  style={{
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  타인을 위한 선물
                </Typography>
              </Button>
            </Link>
          </div>
        </Fade>
      </div>
    </Fragment>
  );
};

export default Page0_0;
