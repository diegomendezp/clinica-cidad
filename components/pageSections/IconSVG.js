import React from 'react'
import styled from 'styled-components';


const IconSVG = props => {
    console.log(props)
    return (
        <IconStyle>
            <img src={props.svg} />
            <h2>{props.title}</h2>
            <p>{props.subtitle}</p>
        </IconStyle>
    )
}

export { IconSVG }

const IconStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5% 2%;

    img {
        width: 3vw;
        height: 3vw;
        margin-bottom: 10%;
    }

    h2 {
        font-size: 1.2vw;
    }

    p{
        font-size: 1.1vw;
    }

    h2, p {
        font-family: "AvenirL";
        margin: 0;
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
  

  
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {

    padding: 8%;
    justify-content: center;

    img {
        width: 12vw;
        height: 12vw;
        margin-bottom: 10%;
    }


    h2 {
        font-size: 5vw;
    }

    p{
        font-size: 4vw;
    }
}
`