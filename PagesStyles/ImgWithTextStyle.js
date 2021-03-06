import styled from 'styled-components';

const ImgWithTextStyleWrapperStyle = styled.div`
  /* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

  width: ${props => (props.width ? `${props.width}vw` : '100vw')};
  height: 100vh;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100vw;
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

  @media (min-width: 481px) and (max-width: 768px) {
    width: 100vw;
  }

  /* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100vw;
    height: 75vh;
    order: 0;
    background-position-x: ${props => (props.imgPosition ? `${props.imgPosition}px` : '-345px')};

    h1 {
      font-size: 9.5vw;
    }
  }
`;

const PointInteractive = styled.ul`
  .point {
    width: 16px;
    height: 16px;
    background: ${props => `${props.backGroundColor}`};
    border-radius: 50%;
    position: absolute;
    list-style-type: none;
    top: ${props => `${props.posY}%`};
    left: ${props => `${props.posX}%`};
  }

  .wrapper {
    position: absolute;
    margin-top: 1.5rem;
    display: inline-block;
    top: ${props => `${props.posY}%`};
    left: ${props => `${props.posX}%`};
  }

  .popOver {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    left: 30px;
    top: -40px;
    min-width: 200px;
    transform: translate(0, 10px);
    background-color: ${props => `${props.backGroundColor}`};
    padding: 1.5rem;
    width: auto;
    border-radius: 2%;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        text-decoration: none;
      }
    }
  }

  .popOverText {
    color: ${props => (props.backGroundColor === 'white' ? 'black' : 'white')};
    font-family: "AvenirL";
    font-size: 1.2em;
  }

  .popOverSolution {
    color: ${props => (props.backGroundColor === 'white' ? 'black' : 'white')};
    font-family: "AvenirL";
    font-size: 1em;
  }

  .popOver::after {
    /* this is used to create the pulse animation */
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: scale(1.2);
    border-radius: 5%;
    box-shadow: inset 0 0 2px 1px ${props => (props.backGroundColor === 'white' ? 'black' : 'white')};
    display: none;
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
    content: "";
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
      box-shadow: inset 0 0 1px 1px ${props => (props.backGroundColor === 'white' ? 'white' : 'black')};
    }

    50% {
      box-shadow: inset 0 0 1px 1px ${props => (props.backGroundColor === 'white' ? 'white' : 'black')};
    }

    100% {
      transform: scale(1.9);
      box-shadow: inset 0 0 1px 1px #00000000;
    }
  }
`;

export { ImgWithTextStyleWrapperStyle, PointInteractive };
