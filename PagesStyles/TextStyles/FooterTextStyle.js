import styled from 'styled-components';

const FooterTextStyle = styled.p`
/* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/
margin: 0;
padding: 0;
font-family: ${props => props.black ? "AvenirB" : "Avenir"};
font-size: 1.8vw;
line-height: 5vh;
letter-spacing: 0.2vw;
margin-bottom: ${props=> props.margin && "3%"};

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
    font-size: 5.5vw;
    line-height: 4vh;
    margin-bottom: ${props=> props.margin && "5%"};
}

`;

export { FooterTextStyle };
