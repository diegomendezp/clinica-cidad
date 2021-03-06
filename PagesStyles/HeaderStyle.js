import styled from 'styled-components';

const HeaderWrapperStyle = styled.div`
  /* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

  width: 80vw;
  padding: 2% 2%;
  z-index: 2;
  text-align: left;

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

@media (min-width: 414px) and (max-width: 1024px) and (orientation: landscape) {
    padding-top: 3%;
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
    box-sizing: border-box;
    width: 85vw;
    padding: 8% 3%;
  }
`;

export { HeaderWrapperStyle };
