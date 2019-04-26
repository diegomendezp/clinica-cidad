import React from 'react'
import Div100vh from 'react-div-100vh'
import { ImgWithTextStyleWrapperStyle, PointInteractive } from '../../PagesStyles/ImgWithTextStyle'

const ImgWithText = props => {
    return (
        <ImgWithTextStyleWrapperStyle img={props.img} imgPosition={props.imgPosition} colorText={props.colorText} order={props.order} width={props.width}>
            <h1>{props.text}</h1>
            {
                props.tratamiento !== undefined && (
                <div className="interactiveTratamiento">                
                    <PointInteractive posX={46} posY={0}>
                        <div className="wrapper">
                            <div className="point" id="point1"></div>
                            <div className="popOver">
                                <p>Hola!</p>
                            </div>
                        </div>
                    </PointInteractive>
                    <PointInteractive posX={62} posY={10}>
                        <div className="point" id="point2"></div>
                    </PointInteractive>
                    <PointInteractive posX={62} posY={50}>
                        <div className="point" id="point3"></div>
                    </PointInteractive>
                    <PointInteractive posX={36} posY={50}>
                        <div className="point" id="point4"></div>
                    </PointInteractive>
                    <PointInteractive posX={43} posY={83}>
                        <div className="point" id="point5"></div>
                    </PointInteractive>
                </div>
                )
            }
        </ImgWithTextStyleWrapperStyle>
    )
}

export {ImgWithText}