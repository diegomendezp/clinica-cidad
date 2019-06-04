import styled from 'styled-components';

const FloatingMenuWrapper = styled.div`
  position: fixed;
  right: 70px;
  z-index: 300000;
  top: 48%;


  @media only screen and (min-width: 321px) and (max-width: 414px){
    right: 70px;
    top: 60%;
  }

  @media only screen and (min-width: 415px) and (max-width: 768px){
    right: 70px;
    top: 70%;
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px){
    right: 70px;
    top: 60%;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1440px){
    right: 70px;
    top: 60%;
  }

  @media only screen and (min-width: 1441px) {
    right: 100px;
    top: 75%;
  }
`;

export default FloatingMenuWrapper;
