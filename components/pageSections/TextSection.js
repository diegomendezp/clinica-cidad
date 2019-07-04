import React from 'react'
import styled from 'styled-components';

const TextSection = props => {
    return (
        <TextSectionStyle>
            {
                Object.values(props.text).map((p,i) => <p key={i}>{p}</p>)
            }
            
        </TextSectionStyle>
    )
}

export { TextSection }

const TextSectionStyle = styled.div`

box-sizing: border-box;
padding: 20% 3%;
order: 2;

p {
    font-family: "AvenirL"
}

width: 50vw;

@media (min-width: 1441px) {
  p {
    font-size: 1.25vw;
  }
}

/* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1440px) {
  p {
    font-size: 1.5vw;
  }
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 769px) and (max-width: 1024px) {
  p {
    font-size: 2.5vw;
  }
  width: 100vw;
    order: 0;
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

@media (min-width: 415px) and (max-width: 768px) {
  p {
    font-size: 2.5vw;
  }
  width: 100vw;
    order: 0;
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (max-width: 414px) {
  p {
    font-size: 3.5vw;
  }
    width: 100vw;
    order: 0;


}
`