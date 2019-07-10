import React from "react";
import Div100vh from "react-div-100vh";
import {
  ImgWithTextStyleWrapperStyle,
  PointInteractive
} from "../../PagesStyles/ImgWithTextStyle";
import faceTreatments from "../../content/faceTreatments.json";

const whitePoints = [15]
const displayFaceTreatments = () => {
  return (
    <div className="interactiveTratamiento">
      {faceTreatments.map((treatment, i )=> {
        const { name, solutions, posX, posY } = treatment;
        return (
          <PointInteractive posX={posX} posY={posY} backGroundColor={whitePoints.includes(i) ? "white" : "black"}>
            <div className="wrapper">
              <div className="point" id="point1" />
              <div className="popOver">
                <p className="popOverText">{name}</p>
                <ul>
                    {solutions.map(solution=> <p className="popOverSolution">{solution.name}</p> )}
                </ul>
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
