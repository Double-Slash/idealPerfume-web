import React, { Component } from "react";
import { Fade, Loop } from "react-animation-components";
import base_img from "../image/forest_base_layer.png";
import light_img from "../image/forest_light_layer.png";
import second_img from "../image/forest_second_layer.png";
import album_img from "../image/forest_album_layer.png";
import "./Forest.css";

class Forest extends Component {
  render() {
    return (
      <div>
        <div className="baselayer">
          <div className="basechild">
            <img className="baseimg" src={base_img} />
          </div>
        </div>
        <div className="lightlayer">
          <div className="lightchild">
            <Loop in interval={2000}>
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
    );
  }
}

export default Forest;
