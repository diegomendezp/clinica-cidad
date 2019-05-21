import styled from 'styled-components';

const PStyle = styled.p`
  
  margin: 0;
  padding: 0;
  font-family: "Avenir";
  font-size: ${props => (props.menu ? '5vw' : '2vw')};
  line-height: 3.3vh;
  -webkit-letter-spacing: 0.6vw;
  -moz-letter-spacing: 0.6vw;
  -ms-letter-spacing: 0.6vw;
  letter-spacing: 0.3vw;

  text-align: ${props => props.align && 'left'};

  @media only screen and (min-width: 415px) and (max-width: 768px) {
    font-size: ${props => (props.menu ? '3vw' : '2vw')};
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: ${props => (props.menu ? '3vw' : '2vw')};
  }

  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    font-size: ${props => (props.menu ? '1.5vw' : '2vw')};
  }

  @media only screen and (min-width: 1441px) {
    font-size: ${props => (props.menu ? '1vw' : '2vw')};
  }
`;

export { PStyle };
