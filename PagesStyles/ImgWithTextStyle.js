import styled from 'styled-components';

const ImgWithTextStyleWrapperStyle = styled.div`
/* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

width: 100vw;
height: 100vh;
background-image: url(${props => props.img});
background-repeat: no-repeat;
background-size: cover;

h1 {
  margin: 0;
  color: white;
  font-family: "AvenirL";
  padding: 7% 3%;
  letter-spacing: 0.6vw;
  font-size: 3.5vw;
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


  height: 75vh;
  background-position-x: ${props=> props.imgPosition ? `${props.imgPosition}px` : "-345px"};

  h1 {
  font-size: 9.5vw;
}


}

`;

export { ImgWithTextStyleWrapperStyle };
