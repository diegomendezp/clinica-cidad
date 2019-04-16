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
    order: 0;


}
`