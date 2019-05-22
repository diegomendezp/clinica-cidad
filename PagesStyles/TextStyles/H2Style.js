import styled from 'styled-components';

const H2Style = styled.h1`
  /* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/
  margin: 0;
  padding: 0;
  font-family: "Avenir";
  font-size: 5vw;
  line-height: 10vh;
  -webkit-letter-spacing: 0.4vw;
  -moz-letter-spacing: 0.4vw;
  -ms-letter-spacing: 0.4vw;
  -webkit-letter-spacing: 0.4vw;
  -moz-letter-spacing: 0.4vw;
  -ms-letter-spacing: 0.4vw;
  letter-spacing: 0.4vw;
  align-self: flex-end;
  width: ${props => (props.equipo ? '100%' : '52vw')};
  height: 29vh;

  white-space: pre-line;

  @media (min-width: 1441px) {
    padding: ${props => (props.padding ? '0 25%' : '0')};
    margin: 0;
    padding: 0;
    font-family: "AvenirL";
    font-size: 6vw;
    line-height: 8vh;
    letter-spacing: 0.2vw;
    align-self: ${props => (props.tratamientos ? 'flex-end' : props.equipo ? 'flex-start' : 'center')};
    height: auto;
    width: ${props => props.equipo && '100%'};
  }

  /* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

  @media (min-width: 1025px) and (max-width: 1440px) {
    padding: ${props => (props.padding ? '0 25%' : '0')};
    margin: 0;
    padding: 0;
    font-family: "AvenirL";
    font-size: 6vw;
    line-height: 8vh;
    letter-spacing: 0.2vw;
    align-self: ${props => (props.tratamientos ? 'flex-end' : props.equipo ? 'flex-start' : 'center')};
    height: auto;
    width: ${props => props.equipo && '100%'};
  }

  /* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: ${props => (props.padding ? '0 25%' : '0')};
    margin: 0;
    padding: 0;
    font-family: "AvenirL";
    font-size: 8vw;
    line-height: 6vh;
    letter-spacing: 0.2vw;
    align-self: ${props => (props.tratamientos ? 'flex-end' : props.equipo ? 'flex-start' : 'center')};
    height: auto;
    width: ${props => props.equipo && '100%'};
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
  @media only screen and (min-width: 415px) and (max-width: 768px) {
    padding: ${props => (props.padding ? '0 25%' : '0')};
    margin: 0;
    padding: 0;
    font-family: "AvenirL";
    font-size: 8vw;
    line-height: 6vh;
    letter-spacing: 0.2vw;
    align-self: ${props => (props.tratamientos ? 'flex-end' : props.equipo ? 'flex-start' : 'center')};
    height: auto;
    width: ${props => props.equipo && '100%'};
  }

  @media only screen and (max-width: 414px) {
    padding: ${props => (props.padding ? '0 25%' : '0')};
    margin: 0;
    padding: 0;
    font-family: "AvenirL";
    font-size: 8vw;
    line-height: 4vh;
    letter-spacing: 0.2vw;
    align-self: ${props => (props.tratamientos ? 'flex-end' : props.equipo ? 'flex-start' : 'center')};
    height: auto;
    width: ${props => props.equipo && '80%'};
  }
`;

export { H2Style };
