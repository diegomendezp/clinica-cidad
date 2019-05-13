import React, { Component } from "react";
import Div100vh from "react-div-100vh";
import { MainWrapperStyle } from "../PagesStyles/MainStyle";

import { PStyle } from "../PagesStyles/TextStyles/PStyle";
import imageOffice from "../static/imgs/home/imgHome1.jpg";
import Header from "./Header";

export default class Main extends Component {
  constructor(props) {
    super();
    this.props = props;
  }
  render() {
    return (
      <Div100vh style={{ height: "100rvh" }}>
        <MainWrapperStyle
          img={this.props.img}
          position={this.props.imgPosition}
          style={{ height: "100vh", zIndex: 2 }}
        >
          <Div100vh style={{ height: "100rvh" }} className="mainContainer">
            <Header title={this.props.title} subtitle={this.props.subtitle} />
            {this.props.footer && (
              <div className="addressContainer">
                <a
                  href="https://goo.gl/maps/4n5D8sUit7jNDYbY8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"Calle Alcalá 590 1A "}{" "}
                </a>

                <a className="with-margin"
                  href="https://goo.gl/maps/ni44kW5qsULYRnJZ7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"  "}
                  {" – "} {"Calle Machupichu 65 | Madrid"}
                </a>
              </div>
            )}
          </Div100vh>
        </MainWrapperStyle>
      </Div100vh>
    );
  }
}
