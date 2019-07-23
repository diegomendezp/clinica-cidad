import styled from 'styled-components';

const ListItemsWrapperStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 50vh;

  ul {
    list-style-type: none;
    padding: 0;
  }

  p:before {
    content: "·";
    margin-left: -20px;
    margin-right: 10px;
  }
  p {
    margin-top: 0;
  }

  .treatments {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 80vw;
    margin: 0 auto;

    .treatments-container {
      width: 30%;
    }
    p,
    h3 {
      font-family: "AvenirL";
    }

    .treatment-header {
      display: flex;
      img {
        margin-right: 15px;
      }
    }
  }

  @media (min-width: 1441px) {
    height: 80vh;
    p,
    h3 {
      font-size: 1.25vw;
    }
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    height: 80vh;
    p,
    h3 {
      font-size: 1.5vw;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: auto;
    .treatments {
      padding: 6% 0;
      flex-direction: column;

      .treatments-container {
        width: 100%;
      }
    }
    p,
    h3 {
      font-size: 2.5vw;
    }
    width: 100vw;
    order: 0;
  }

  @media (min-width: 415px) and (max-width: 768px) {
    height: auto;
    .treatments {
      padding: 8% 0;
      flex-direction: column;

      .treatments-container {
        width: 100%;
      }
    }
    p,
    h3 {
      font-size: 2.5vw;
    }
    width: 100vw;
    order: 0;
  }

  @media (max-width: 414px) {
    p {
      margin: 2% 0;
    }
    height: auto;
    .treatments {
      padding: 10% 0;
      flex-direction: column;

      .treatments-container {
        width: 100%;
      }

      .treatment-header {
        margin-top: 5%;
      }
    }
    p,
    h3 {
      font-size: 3.5vw;
    }
    width: 100vw;
    order: 0;
  }
`;

export { ListItemsWrapperStyle };
