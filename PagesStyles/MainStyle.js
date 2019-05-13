import styled from 'styled-components';

const MainWrapperStyle = styled.div`
/* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/
width: 100vw;

.mainContainer {
  
  background-image: url(${props => props.img});
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
    margin-left: ${props => (props.margin ? '1%' : '0')};;
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
  
  .mainContainer {

    }  
  
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {

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
    }
}

`;

export { MainWrapperStyle };
