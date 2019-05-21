import styled from 'styled-components';

const EquipoMainPageStyle = styled.div`
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  .workersContainer {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
    flex-direction: column;
  }

  @media only screen and (min-width: 415px) and (max-width: 768px) {
    .workersContainer {
      display: flex;
      flex-wrap: wrap;
      width: 90%;
      margin: 0 auto;
      justify-content: space-between;
      flex-direction: row;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    .workersContainer {
      display: flex;
      flex-wrap: wrap;
      width: 90%;
      margin: 0 auto;
      justify-content: space-between;
      flex-direction: row;
    }
  }

  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    .workersContainer {
      display: flex;
      flex-wrap: wrap;
      width: 90%;
      margin: 0 auto;
      justify-content: space-between;
      flex-direction: row;
    }
  }

  @media only screen and (min-width: 1441px) {
    .workersContainer {
      display: flex;
      flex-wrap: wrap;
      width: 90%;
      margin: 0 auto;
      justify-content: space-between;
      flex-direction: row;
    }
  }
`;

export { EquipoMainPageStyle };
