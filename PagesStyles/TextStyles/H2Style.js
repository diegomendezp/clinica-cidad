import styled from 'styled-components';

const H2Style = styled.h1`
/* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/
margin: 0;
padding: 0;
font-family: "Avenir";
font-size: 8vw;
line-height: 13vh;
-webkit-letter-spacing: 0.6vw;
-moz-letter-spacing: 0.6vw;
-ms-letter-spacing: 0.6vw;
-webkit-letter-spacing: 0.6vw;
-moz-letter-spacing: 0.6vw;
-ms-letter-spacing: 0.6vw;
letter-spacing: 0.6vw;
align-self: flex-end;
width: ${props => props.equipo ? "100%" : "52vw"};
height: 29vh;


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

  padding: ${props => props.padding ? "0 25%" : "0"};
  margin: 0;
  padding: 0;
  font-family: "AvenirL";
  font-size: 8vw;
  line-height: 6vh;
  letter-spacing: 0.4vw;
  align-self: center;
  height: 15vh;
  width: ${props => props.equipo && "80%"};

}

`;

export { H2Style };
