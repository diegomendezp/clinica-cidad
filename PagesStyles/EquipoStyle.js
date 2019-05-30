import styled from 'styled-components';

const EquipoStyle = styled.div`
  z-index: 0;
  position: relative;

  .equipoContainer {
    width: 100vw;
    height: 100vh;
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 2;
  }

  .infoContainer {
    box-sizing: border-box;
    text-align: left;
    width: 100vw;
    /* height: 100vh; */
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 3%;
  }

  /* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

  @media (min-width: 1441px) {
    z-index: 0;
    .equipoContainer {
      width: 100vw;
      height: 100vh;
      background-image: url(${props => props.img});
      background-size: cover;
      background-repeat: no-repeat;
      z-index: 2;
      padding-bottom: 3%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .infoContainer {
      box-sizing: border-box;
      text-align: left;
      width: 95%;
      margin: 0 auto;
      padding: 0;
      display: flex;

      button {
        margin-top: 2%;
        order: 2;
        display: inline-block;
      }
      h1 {
        display: inline-block;
      }
    }

  }

  /* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

  @media (min-width: 1025px) and (max-width: 1440px) {
    z-index: 0;
    .equipoContainer {
      width: 100vw;
      height: 100vh;
      background-image: url(${props => props.img});
      background-size: cover;
      background-repeat: no-repeat;
      z-index: 2;
      padding-bottom: 5%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .infoContainer {
      box-sizing: border-box;
      text-align: left;
      width: 95%;
      margin: 0 auto;
      padding: 0;
      display: flex;

      button {
        margin-top: 2%;
        order: 2;
        display: inline-block;
      }
      h1 {
        display: inline-block;
      }
    }

  }

  /* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

  @media (min-width: 769px) and (max-width: 1024px) {
    z-index: 0;
    .equipoContainer {
      width: 100vw;
      height: 100vh;
      background-image: url(${props => props.img});
      background-size: cover;
      background-repeat: no-repeat;
      z-index: 2;
      background-position-x: -500px;
      padding-bottom: 10%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .infoContainer {
      box-sizing: border-box;
      text-align: left;
      width: 95%;
      margin: 0 auto;
      padding: 0;
      display: flex;

      button {
        margin-top: 5%;
        order: 2;
        display: inline-block;
      }
      h1 {
        display: inline-block;
      }
    }
  }

  /* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

  @media (min-width: 769px) and (max-width: 1024px) and (orientation: landscape) {
  }

  /* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

  @media (min-width: 415px) and (max-width: 768px) {
    z-index: 0;
    .equipoContainer {
      width: 100vw;
      height: 100vh;
      background-image: url(${props => props.img});
      background-size: cover;
      background-repeat: no-repeat;
      z-index: 2;
      background-position-x: -550px;
      padding-bottom: 10%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .infoContainer {
      box-sizing: border-box;
      text-align: left;
      width: 90%;
      margin: 0 auto;
      padding: 0;
      display: flex;

      button {
        margin-top: 5%;
        order: 2;
        display: inline-block;
      }
      h1 {
        display: inline-block;
      }
    }
  }

  /* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

  @media only screen and (max-width: 414px) {
    z-index: 0;
    .equipoContainer {
      width: 100vw;
      height: 100vh;
      background-image: url(${props => props.img});
      background-size: cover;
      background-repeat: no-repeat;
      z-index: 2;
      background-position-x: -550px;
      padding-bottom: 10%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .infoContainer {
      box-sizing: border-box;
      text-align: left;
      width: 80%;
      margin: 0 auto;
      padding: 0;
      button {
        margin-top: 5%;
      }
    }
  }
`;

export { EquipoStyle };
