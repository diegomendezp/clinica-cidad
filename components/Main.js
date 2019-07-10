import React, { Component } from "react";
import Div100vh from "react-div-100vh";
import { MainWrapperStyle } from "../PagesStyles/MainStyle";
import Header from "./Header";

export default class Main extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      images: [
        "/static/imgs/clinicas/galeria/img1.jpg",
        "/static/imgs/clinicas/galeria/img2.jpg",
        "/static/imgs/clinicas/galeria/img3.jpg",
        "/static/imgs/clinicas/galeria/img4.jpg",
        "/static/imgs/clinicas/galeria/img5.jpg",
        "/static/imgs/clinicas/galeria/img6.jpg"
      ],
      image: "/static/imgs/clinicas/galeria/img1.jpg",
      index: 0
    };
  }

  _carrousel() {
    setInterval(() => {
      const { images, index } = this.state;
      if (index + 1 > images.length - 1) {
        this.setState({ ...this.state, image: images[0], index: 0 });
      } else {
        this.setState({
          ...this.state,
          image: images[index + 1],
          index: index + 1
        });
      }
    }, 3500);
  }

  componentDidMount() {
    if (this.props.home) {
      this._carrousel();
    }
  }

  render() {
    const { image } = this.state;
    return (
      <Div100vh style={{ height: "100rvh" }}>
        <MainWrapperStyle
          img={image}
          position={ this.props.blog === true ? "none" : `${this.props.imagePosition}`}
          style={{ height: this.props.blog === true ? "0vh" : "100vh", zIndex: 2 }}
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

                <a
                  className="with-margin"
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
