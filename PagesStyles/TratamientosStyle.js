import styled from 'styled-components';

const TratamientosWrapperStyle = styled.div`
  box-sizing: border-box;
  position: relative;
  z-index: 0;

  .tratamientosContainer {
    width: 100vw;
    height: 100vh;
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
  }

  .infoContainer {
    box-sizing: border-box;
    text-align: right;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 0 3%;
  }

  .imageContainer {
    z-index: 1;
  }

  .upImage {
    width: 100vw;
    height: 100vh;
  }

  .downImage {
    position: absolute;
    width: 50vw;
    height: 65vh;
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

  @media (min-width: 376px) and (max-width: 480px) {
    height: 100vh;
    background: #ebecee;

    .tratamientosContainer {
      background-position-x: -220px;
      padding-bottom: 10%;
      height: 64vh;
    }

    .infoContainer {
      text-align: left;
    }

    .downImage {
      position: absolute;
      width: 90vw;
      height: 70vh;
      object-fit: contain;
      z-index: 1;
    }
  }

  /* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

  @media only screen and  (max-width: 414px) {
    height: 100vh;
    background: #ebecee;

    .tratamientosContainer {
      background-position-x: -220px;
      padding-bottom: 10%;
      height: 64vh;
    }

    .infoContainer {
      display: flex;
      justify-content: flex-end;
      margin: 0 auto;
      padding: 0;
      width: 80%;
      button {
        margin-top: 5%;
      }
    }

    .downImage {
      position: absolute;
      width: 90vw;
      height: 70vh;
      object-fit: contain;
      z-index: 1;
    }
  }
`;

export { TratamientosWrapperStyle };
