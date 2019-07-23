import React from "react";
import Div100vh from "react-div-100vh";
import {
  ImgWithTextStyleWrapperStyle,
  PointInteractive
} from "../../PagesStyles/ImgWithTextStyle";
import faceTreatments from "../../content/faceTreatments.json";
import Link from 'next/link'

const whitePoints = [15]
const displayFaceTreatments = () => {
  return (
    <div className="interactiveTratamiento">
      {faceTreatments.map((treatment, i )=> {
        const { name, solutions, posX, posY } = treatment;
        return (
          <Link href="/post/Rejuvenecimientodelamirada."> 
            <a>
              <PointInteractive posX={posX} posY={posY} backGroundColor={"white"}>
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
            </a>
          </Link>
        );
      })}
    </div>
  );
};

const ImgWithText = props => {
    const { display } = props;
  return (
    <ImgWithTextStyleWrapperStyle
      img={props.img}
      imgPosition={props.imgPosition}
      colorText={props.colorText}
      order={props.order}
      width={props.width}
    >
      <h1>{props.text}</h1>
      {props.tratamiento !== undefined &&  display &&(
        displayFaceTreatments()
      )}
    </ImgWithTextStyleWrapperStyle>
  );
};

export { ImgWithText };
