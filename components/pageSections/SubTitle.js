import React from 'react'
import styled from 'styled-components';

const SubTitle = props => {
    return (
        <React.Fragment>
            <H2Style>
                {props.text}
            </H2Style>
        </React.Fragment>
    )
}

export { SubTitle }

const H2Style = styled.h1`
/* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/
margin: 0;
padding: 0;
font-family: ${props=>props.bold ? "Avenir" : "AvenirL"};
font-size: 6vw;
line-height: 16vh;
letter-spacing: 0.5vw;
font-weight: 100;

a {
  text-decoration: none;
  color: black;
}


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
  
  letter-spacing: 0.1vw;
  
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {

  font-size: 5.5vw;
  letter-spacing: 0.1vw;
  line-height: 4vh;
  padding: ${props => props.padding ? "0 25%" : "0"}
}

`;