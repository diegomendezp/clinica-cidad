import styled from 'styled-components';

const MainWrapperStyle = styled.div`
  /* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/
  width: 100vw;

  .mainContainer {
    background-image: url(${props => props.img});
    transition: background-image 0.01s ease-in-out;
    -webkit-transition: background-image 0.01s ease-in-out;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .headerContainer {
    width: 100vw;
    padding: 2% 2%;
    z-index: 2;
  }

  .addressContainer {
    box-sizing: border-box;
    display: flex;
    width: 100vw;
    padding: 3%;

    a {
      margin-left: ${props => (props.margin ? '1%' : '0')};
      padding: 0;
      font-family: "Avenir";
      font-size: 2vw;
      letter-spacing: 0.1vw;
      line-height: 4vh;
      text-decoration: none;
      color: black;
    }
    .with-margin {
      margin-left: 1%;
    }

    a:visited {
      text-decoration: none;
      color: black;
    }
  }

  @media (min-width: 1441px) {
  }

  /* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

  @media (min-width: 1025px) and (max-width: 1440px) {
  }

  /* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

  @media (min-width: 769px) and (max-width: 1024px) {
    .addressContainer {
      a {
        font-size: 3vw;
      }
    }
  }

  /* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

  @media (min-width: 415px) and (max-width: 768px) {
    .addressContainer {
      a {
        font-size: 3vw;
      }
    }
  }

  /* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

  /* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

  @media only screen and (max-width: 414px) {
    .mainContainer {
      background-position-x: ${props => props.position}px;
    }

    .headerContainer {
      width: 80vw;
      padding: 8% 3%;
    }

    .addressContainer {
      display: inline;
      width: 100vw;
      padding: 3%;

      p {
        font-size: 5.5vw;
      }

      a {
        font-size: 6vw;
      }
    }
  }
`;

export { MainWrapperStyle };
