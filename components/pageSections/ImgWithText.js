import React from 'react'
import Div100vh from 'react-div-100vh'
import { ImgWithTextStyleWrapperStyle } from '../../PagesStyles/ImgWithTextStyle'

const ImgWithText = props => {
    return (
        <ImgWithTextStyleWrapperStyle img={props.img} imgPosition={props.imgPosition} colorText={props.colorText} order={props.order} width={props.width}>
            <h1>{props.text}</h1>
        </ImgWithTextStyleWrapperStyle>
    )
}

export {ImgWithText}