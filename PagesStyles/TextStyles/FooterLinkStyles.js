import styled from 'styled-components';

const FooterLink = styled.a`
  margin: 0;
  padding: 0;
  font-family: ${props => (props.black ? 'AvenirB' : 'Avenir')};
  font-size: 1.8vw;
  line-height: 5vh;
  letter-spacing: 0.15vw;
  margin-bottom: ${props => props.margin && '3%'};
  cursor: pointer;
  text-decoration: none;
  color: black;
  display: block;
  &:visited {
    color: black;
  }
`;

export { FooterLink };
