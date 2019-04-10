import styled from 'styled-components';

const TratamientosWrapperStyle = styled.div`


.tratamientosContainer {
    width: 100vw;
    background: #EBECEE;
}

.imageContainer {
  width: 100vw;
  height: 100vh;
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 100px;
}

.upImage {
    width: 100vw;
    height: 100vh;
}

.downImage {
    position: absolute;
    width: 50vw;
    height: 50vh;
    z-index: 1;
}

/* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

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

  .imageContainer {
  
  width: 160vw;
  height: 80vh;
  background-image: url(${props => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: 100px;
  background-position-x: -80px;
}
  
.downImage {
    position: absolute;
    width: 75vw;
    height: 75vh;
    object-fit: contain;
    z-index: 1;
}
  
}

`;

export { TratamientosWrapperStyle };
