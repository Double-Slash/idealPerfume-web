import React, { Fragment } from "react";
import { Button, Typography, Fade } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../page.css";

const page4 = () => {
  return (
    <Fragment>
      <Fade in={true} timeout={3000}>
        <div style={{ marginTop: "30%", marginLeft: 50, marginRight: 50 }}>
          <div>
            <Typography
              className="Text"
              style={{ fontSize: 25, color: "white" }}
            >
              <p style={{ marginTop: 0, marginBottom: 5, fontWeight: "bold" }}>
                Q.
              </p>
              <span>당신을 닮은</span>
              <p style={{ marginTop: 0, fontWeight: "bold" }}>
                계절은 언제인가요?
              </p>
            </Typography>
          </div>

          <div style={{ marginTop: "100%" }}>
            <Link
              to="/page4"
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                style={{
                  backgroundColor: "rgba(189,195,199,0.7)",
                  width: "100%",
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
                  나를 위한 선물
                </Typography>
              </Button>
            </Link>

            <Link
              to="/page4"
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                style={{
                  width: "100%",
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
        </div>
      </Fade>
    </Fragment>
  );
};

export default page4;
