import React, { Component, Fragment } from "react";
import { Fade, Loop } from "react-animation-components";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import base_img from "../image/page3/page3-4-forest/forest_base_layer.png";
import light_img from "../image/page3/page3-4-forest/forest_light_layer.png";
import second_img from "../image/page3/page3-4-forest/forest_second_layer.png";
import album_img from "../image/page3/page3-4-forest/forest_album_layer.png";
import './page3.css';

class Forest extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <div className="baselayer">
            <div className="basechild">
              <img className="baseimg" src={base_img} />
            </div>
          </div>
          <div className="lightlayer">
            <div className="lightchild">
              <Loop in interval={1500}>
                <Fade>
                  <img className="lightimg" src={light_img} />
                </Fade>
              </Loop>
            </div>
          </div>
          <div className="secondlayer">
            <div className="secondchild">
              <img className="secondimg" src={second_img} />
            </div>
          </div>
          <div className="albumlayer">
            <div className="albumchild">
              <img className="albumimg" src={album_img} />
            </div>
          </div>
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
                marginRight: 20
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
            </div>

            <div
              style={{
                width: "90%",
                marginTop: "5%",
                display: "block",
                marginLeft: 20,
                marginRight: 20
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
                  to="/page3-drawer-4"
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
  }
}

export default Forest;
