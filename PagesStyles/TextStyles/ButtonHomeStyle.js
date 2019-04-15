import styled from 'styled-components';

const ButtonHomeStyle = styled.button`
/* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

font-family: "Avenir";
border: 4px solid black;
background: transparent;
padding: 1% 2%;
font-size: 2vw;
-webkit-order: -1;
-ms-flex-order: -1;
order: -1;
align-self: ${props => props.equipo ? "flex-start" : "flex-end"};
margin-bottom: ${props => props.mobile ? "15%" : "3%"};;

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
  
  padding: 4% 9%;
    font-size: 6vw;
  
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  padding: 4% 9%;
  font-size: 6vw;
  order: 1;
  align-self: center;
  width: 80vw;
}

`;

export { ButtonHomeStyle };
