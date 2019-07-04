import styled from 'styled-components';

const NavWrapperStyle = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: ${props => (props.visible ? '100vh' : '20vh')};
  padding: 0;
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  z-index: ${props => (props.position ? 1 : 10)};
  overflow-x: hidden;
  overflow-y: ${props => (props.visible ? 'scroll' : 'hidden')};
  animation-delay: 0.4s;
  background-color: ${props => (props.visible ? 'white' : 'transparent')};
  transition: background-color 0.01s ease;
  top: 0;

  .logo {
    margin-bottom: 15%;
    width: 12vw;
  }

  .logoSection {
    align-self: flex-start;
    margin-top: 13%;
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
    /* order: 2; */
  }

  .rightSection {
    /* order: 3; */
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
  }

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  }

  /* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

  @media (min-width: 414px) and (max-width: 767px) {
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
      margin-top: 5%;
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
      margin-top: 30%;
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

  /* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

  @media (min-width: 320px) and (max-width: 413px) {
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
      margin-top: 13%;
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
