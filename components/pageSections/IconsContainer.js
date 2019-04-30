import React from 'react'
import styled from 'styled-components';
import { IconSVG } from './IconSVG'

const IconContainer = props => {
    return (
        <IconStyleWrapper>
            {
                props.icons.map(icon => <IconSVG svg={icon.svg} title={icon.title} subtitle={icon.subtitle}></IconSVG>)
            }
        </IconStyleWrapper>
    )
}

export { IconContainer }

const IconStyleWrapper = styled.div`


    background: rgb(225,236,255);
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    width: 70vw;
    align-items: center;
    margin: 0 auto;
    margin-top: -6%;
    margin-bottom: -13%;



    @media (min-width: 1281px) {
  

  
}

/* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  

  
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  

  
}

/* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  

  
}

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  

  
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {

    width: 100vw;
    justify-content: center;
    align-items: center;
    margin: 0;


}

`