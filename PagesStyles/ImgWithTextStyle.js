import styled from 'styled-components';

const ImgWithTextStyleWrapperStyle = styled.div`
/* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

width: ${props => props.width ? `${props.width}vw` : "100vw"};
height: 100vh;
background-image: url(${props => props.img});
background-repeat: no-repeat;
background-size: cover;
order: ${props => props.order};

h1 {
  margin: 0;
  color: ${props => props.colorText};
  font-family: "AvenirL";
  padding: 7% 3% 3% 3%;
  letter-spacing: 0.6vw;
  font-size: 3.5vw;
}

.interactiveTratamiento {
  width: 100vw;
  height: 60vh;
  position: relative;

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

  width: 100vw;
  height: 75vh;
  order: 0;
  background-position-x: ${props=> props.imgPosition ? `${props.imgPosition}px` : "-345px"};

  h1 {
  font-size: 9.5vw;
  }




}

`;


const PointInteractive = styled.ul`

.point {
    width: 20px;
    height: 20px;
    background: black;
    border-radius: 50%;
    position: absolute;
    list-style-type: none;
    top: ${props => `${props.posY}%`};
    left: ${props => `${props.posX}%`};
  }

  .wrapper {
    position: relative;
    margin-top: 1.5rem;
    display: inline-block;
    top: ${props => `${props.posY}%`};
    left: ${props => `${props.posX}%`};
  }

  .popOver{
    opacity: 0;
    visibility: hidden;
    position: absolute;
    left: 30px;
    top: -40px;
    transform: translate(0, 10px);
    background-color: #bfbfbf;
    padding: 1.5rem;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    width: auto;
    border-radius: 5%;
  }

  .popOver:before {
    position: absolute;
    z-index: -1;
    content: "";
    top: 0px;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent #bfbfbf transparent;
    transition-duration: 0.3s;
    transition-property: transform;
  }

  .wrapper:hover .popOver {
    z-index: 10;
    opacity: 1;
    visibility: visible;
    transform: translate(10px, 0px);
    transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);
  }

  .point:hover::after {
    animation-play-state: paused;
  }

  .point::after {
    /* this is used to create the pulse animation */
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    top: 0;
    left: 0;
    animation: cd-pulse 2s infinite;
  }

  @keyframes cd-pulse {
    0% {
      transform: scale(1);
      box-shadow: inset 0 0 1px 1px black;
    }

    50% {
      box-shadow: inset 0 0 1px 1px black;
    }

    100% {
      transform: scale(1.9);
      box-shadow: inset 0 0 1px 1px #00000000;
    }
  }

`;

export { ImgWithTextStyleWrapperStyle, PointInteractive};
