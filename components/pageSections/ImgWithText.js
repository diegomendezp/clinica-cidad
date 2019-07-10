import React from "react";
import Div100vh from "react-div-100vh";
import {
  ImgWithTextStyleWrapperStyle,
  PointInteractive
} from "../../PagesStyles/ImgWithTextStyle";
import faceTreatments from "../../content/faceTreatments.json";

const displayFaceTreatments = () => {
  return (
    <div className="interactiveTratamiento">
      {faceTreatments.map(treatment => {
        const { name, solutions, posX, posY } = treatment;
        return (
          <PointInteractive posX={posX} posY={posY}>
            <div className="wrapper">
              <div className="point" id="point1" />
              <div className="popOver">
                <p className="popOverText">{name}</p>
              </div>
            </div>
          </PointInteractive>
        );
      })}
    </div>
  );
};

const ImgWithText = props => {
  return (
    <ImgWithTextStyleWrapperStyle
      img={props.img}
      imgPosition={props.imgPosition}
      colorText={props.colorText}
      order={props.order}
      width={props.width}
    >
      <h1>{props.text}</h1>
      {props.tratamiento !== undefined && (
        displayFaceTreatments()
      )}
    </ImgWithTextStyleWrapperStyle>
  );
};

export { ImgWithText };
