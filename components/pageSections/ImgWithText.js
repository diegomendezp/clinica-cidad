import React from 'react'
import Div100vh from 'react-div-100vh'
import { ImgWithTextStyleWrapperStyle } from '../../PagesStyles/ImgWithTextStyle'

const ImgWithText = props => {
    return (
        <ImgWithTextStyleWrapperStyle img={props.img} imgPosition={props.imgPosition}>
            <h1>{props.text}</h1>
        </ImgWithTextStyleWrapperStyle>
    )
}

export {ImgWithText}