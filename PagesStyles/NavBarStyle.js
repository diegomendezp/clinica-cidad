import styled from 'styled-components';

const NavWrapperStyle = styled.div`
  box-sizing: border-box;
  height: auto;
  padding: 0;
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  z-index: ${props => (props.position ? 1 : 10)};
  overflow-x: hidden;
  overflow-y: hidden;
  animation-delay: 0.4s;
  background-color: ${props => (props.visible ? 'white' : 'transparent')};
  transition: background-color 0.01s ease;
  top: 2%;
  right: 2%;
  height: 90px;
  cursor: pointer;
  width: 90px;

  .logo {
    margin-bottom: 15%;
    width: 12vw;
  }

  .close {
    position: absolute;
    top: 2%;
    right: 2%;
    height: 90px;
    width: 90px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
  }

  .logoSection {
    align-self: flex-start;

    z-index: 1000;
    cursor: pointer;
    /* order: 1; */
  }

  .infoNavSection {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -13%;
  }

  .leftSection {
    margin-top: 19%;
    margin-bottom: 3%;
    animation: fade-left 3s;
    -webkit-animation: fade-left 3s;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
    /* order: 2; */
  }

  .rightSection {
    animation: fade-right 3s;
    -webkit-animation: fade-right 3s;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
  }

  a {
    color: black;
    text-decoration: none;
  }

  a:visited {
    color: black;
  }

  .menu {
    width: 100vw;
    background: white;
    display: flex;
    flex-direction: column;
  }

  .menuSection {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 5%;
  }

  .subMenuSection {
    width: 50vw;
    background: white;
  }

  .subMenuSection2 {
    width: 50vw;
    background: white;
  }

  .menuFooter {
    padding: 3% 5%;
    background: white;
    display: flex;
    align-items: center;
  }

  .menuIcon {
    position: absolute;
    padding-right: 3%;
    z-index: 10;
    top: ${props => (props.visible ? '5%' : '25%')};
  }

  .hamburger {
    outline: none;
  }

  /* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

  .dialog {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1300;
    position: fixed;
    transition: opacity 225ms;
    -webkit-transition: opacity 225ms;
    .menu {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      position: fixed;
      touch-action: none;
      background-color: white;
      -webkit-tap-highlight-color: transparent;
      transition: opacity 225ms;
      -webkit-transition: opacity 225ms;
    }
    .menu-container {
      background-color: white;
      opacity: 1;
      width: 100%;
      margin: 0;
      height: 100%;
      max-width: 100%;
      max-height: none;
      min-height: 100vh;
      border-radius: 0;
    }
    .menu-open {
      display: flex;
      justify-content: space-between;
      height: 100%;
      max-height: none;
      min-height: 100vh;
    }
  }

  @keyframes fade-right {
    0% {
      opacity: 0;
      transition-property: opacity, transform;
      transform: translate3d(100px, 0, 0);
    }
    100% {
      transform: translate3d(0px, 0, 0);
      opacity: 1;
    }
  }
  @-webkit-keyframes fade-right {
    0% {
      opacity: 0;
      transition-property: opacity, transform;
      transform: translate3d(100px, 0, 0);
    }
    100% {
      transform: translate3d(0px, 0, 0);
      opacity: 1;
    }
  }
  @keyframes fade-left {
    0% {
      opacity: 0;
      transition-property: opacity, transform;
      transform: translate3d(-100px, 0, 0);
    }
    100% {
      transform: translate3d(0px, 0, 0);
      opacity: 1;
    }
  }
  @-webkit-keyframes fade-left {
    0% {
      opacity: 0;
      transition-property: opacity, transform;
      transform: translate3d(-100px, 0, 0);
    }
    100% {
      transform: translate3d(0px, 0, 0);
      opacity: 1;
    }
  }
  @media (min-width: 1281px) {
    .menu {
      height: 100vh;
    }

    /* .subMenuSection2 {
    width: 50vw;
    background: white;
    padding-top: 27%;
  
} */
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

  /* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

  @media (min-width: 768px) and (max-width: 1024px) {
    .menu {
      height: 100vh;
    }

    .menuIcon {
      position: absolute;
      padding-right: 6%;
    }

    width: ${props => (props.visible ? '100vw' : '90px')};
    height: ${props => (props.visible ? '100vh' : '90px')};
    top: ${props => (props.visible ? '0' : '15px')};
    right: ${props => (props.visible ? '0' : '2%')};
    align-items: flex-start;
    .close {
      position: absolute;
      top: 2%;
      right: 2%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
      cursor: pointer;
    }
  }

 

  /* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/



  @media (min-width: 414px) and (max-width: 1024px) and (orientation: landscape) {
    .menu {
      height: 100vh;
    }

    .menuIcon {
      position: absolute;
      padding-right: 6%;
    }

    width: ${props => (props.visible ? '100vw' : '90px')};
    height: ${props => (props.visible ? '100vh' : '90px')};
    top: ${props => (props.visible ? '0' : '15px')};
    right: ${props => (props.visible ? '0' : '2%')};
    align-items: flex-start;
    .close {
      position: absolute;
      top: 2%;
      right: 2%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
      cursor: pointer;
    }
  }
  /* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

  @media (min-width: 320px) and (max-width: 413px) {
    width: ${props => (props.visible ? '100vw' : '90px')};
    height: ${props => (props.visible ? '100vh' : '90px')};
    top: ${props => (props.visible ? '0' : '15px')};
    right: ${props => (props.visible ? '0' : '2%')};
    align-items: flex-start;
    .close {
      position: absolute;
      top: 2%;
      right: 2%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
      cursor: pointer;
    }
    .menuIcon {
      top: ${props => (props.visible ? '0.8%' : '4%')};
    }

    .logo {
      width: 30vw;
    }

    .subMenuSection,
    .subMenuSection2 {
      box-sizing: border-box;
      width: 100vw;
    }

    .subMenuSection2 {
      margin-top: 5%;
    }

    .logoSection {
      /* order: 1; */
      align-self: flex-start;
    }

    .leftSection {
      order: 2;
    }

    .rightSection {
      /* order: 2; */
    }

    .menuSection {
      box-sizing: border-box;
      flex-direction: column;
    }

    .infoNavSection {
      width: 100%;
      flex-direction: column;
      padding: 0 4%;
      margin-top: 22%;
    }

    .leftSection,
    .rightSection {
      width: 100%;
    }

    .menuFooter {
      img {
        width: 10vw;
        margin-left: 2%;
      }
    }
  }
`;

export { NavWrapperStyle };
