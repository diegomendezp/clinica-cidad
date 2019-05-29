import React, { Component } from "react";
import Div100vh from "react-div-100vh";
import { MainWrapperStyle } from "../PagesStyles/MainStyle";

import { PStyle } from "../PagesStyles/TextStyles/PStyle";
import imageOffice from "../static/imgs/home/imgHome1.jpg";
import image1 from "../static/imgs/clinicas/galeria/imgclinicagaleria1.jpg";
import image3 from "../static/imgs/clinicas/galeria/imgclinicagaleria7.jpg";
import image4 from "../static/imgs/clinicas/galeria/imgclinicagaleria5.jpg";
import image2 from "../static/imgs/clinicas/galeria/imgclinicagaleria2.jpg";
import image5 from "../static/imgs/clinicas/galeria/imgClinica2.jpg";
import image6 from "../static/imgs/clinicas/galeria/imgclinicagaleria8.jpg";
import image7 from "../static/imgs/clinicas/galeria/imgclinicagaleria9.jpg";

import Header from "./Header";

export default class Main extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      images: [
        imageOffice,
        image1,
        image3,
        image2,
        image4,
        image7
      ],
      image:imageOffice,
      index: 0
    }
  }

  _carrousel() {
    setInterval(() => {
      const { images, index } = this.state;
      if(index + 1 > images.length-1) {
        this.setState({...this.state, image: images[0], index:0})
      } else {
        this.setState({...this.state, image: images[index + 1], index:index + 1})
      }  
    }, 3500)
  }

  componentDidMount() {
    if(this.props.home) {
      this._carrousel();
    }
  }
  
  render() {
    const { image } = this.state
    return (
      <Div100vh style={{ height: "100rvh" }}>
        <MainWrapperStyle
          img={image}
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
