import styled from 'styled-components';

const ButtonHomeStyle = styled.button`
  /* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

  font-family: "Avenir";
  border: 4px solid black;
  background: ${props => (props.background ? '#ffffff63' : 'transparent')};
  padding: 1% 2%;
  font-size: 2vw;
  -webkit-order: -1;
  -ms-flex-order: -1;
  order: -1;
  align-self: ${props => (props.equipo ? 'flex-start' : 'flex-end')};
  margin-bottom: 3%;
  cursor: pointer;
  border-radius: 3px;
  outline: none;

  &:hover {
    background: black;
    color: white;
    border: 4px solid white;
  }

  @media (min-width: 1441px) {
    padding: 1% 4%;
    font-size: 2vw;
  }

  /* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

  @media (min-width: 1025px) and (max-width: 1440px) {
    padding: 1.5% 5%;
    font-size: 2vw;
  }

  /* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 2% 6%;
    font-size: 2.5vw;
  }

  /* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

  /* @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  } */

  /* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

  @media (min-width: 415px) and (max-width: 768px) {
    padding: 2% 6%;
    font-size: 3.5vw;
  }

  /* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

  @media only screen and (max-width: 414px) {
    padding: 4% 9%;
    font-size: 6vw;
    order: 1;
    align-self:  ${props => (props.tratamientos ? 'flex-end' : 'center')};
    width: 80vw;
    margin-bottom: ${props => (props.mobile ? '15%' : '3%')};
  }
`;

export { ButtonHomeStyle };
