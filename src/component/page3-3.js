import React, { Fragment } from "react";
import { Fade } from "react-animation-components";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Transition } from "react-transition-group";

import ocean_img from "../image/page3/page3-3-ocean/ocean.png";
import boat_img from "../image/page3/page3-3-ocean/boat.png";
import border_img from "../image/page3/border.png";
import "./page3.css";

const Ocean = () => {
  return (
    <Fragment>
      <div style={{ position: "absolute" }}>
        <img src={ocean_img} className="background" alt="ocean"/>
        <img src={border_img} className="background" alt="border"/>

        <Transition timeout={100000} in={true} appear>
          {(status) => <img src={boat_img} className={`boat boat-${status}`} alt="boat"/>}
        </Transition>
      </div>
      <div style={{ marginTop: "30%", zIndex: 6, position: "relative" }}>
        <Fade in={true} timeout={5000}>
          <div style={{ marginLeft: 40, marginRight: 40 }}>
            <Typography
              className="Text"
              style={{ fontSize: 25, color: "white" }}
            >
              <span
                style={{
                  marginTop: 0,
                  marginBottom: 5,
                  fontWeight: "bold",
                }}
              >
                Q.
              </span>
              <br></br>
              <span style={{ fontWeight: "bold" }}>당신은 이 액자를 </span>
              <br></br>
              <span style={{ marginTop: 0, fontWeight: "bold" }}>
                어디에 두시나요?
              </span>
            </Typography>
          </div>

          <div
            style={{
              width: "90%",
              marginTop: "60%",
              display: "block",
              marginLeft: 20,
              marginRight: 20,
            }}
          >
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
                 to={{
                  pathname: "/page3-table",
                  state: { prevPath: window.location.pathname },
                }}
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
          </div>

          <div
            style={{
              width: "90%",
              marginTop: "5%",
              display: "block",
              marginLeft: 20,
              marginRight: 20,
            }}
          >
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
                to={{
                  pathname: "/page3-drawer",
                  state: { prevPath: window.location.pathname },
                }}
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
                  어쩌다 한 번 꺼내 볼 수 있는 서랍 속
                </Typography>
              </Link>
            </Button>
          </div>
        </Fade>
      </div>
    </Fragment>
  );
};

export default Ocean;
