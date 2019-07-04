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

  justify-content: center;
  .main-member {
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 5% 0;
    justify-content: space-between;

    img {
      object-fit: cover;
      width: 100%;
      height: 30vh;
    }

    .main-member-description {
      width: 100%;
      text-align: left;
      p {
        font-family: "Avenir";
        font-size: 6.5vw;
        line-height: 3vh;
        -webkit-letter-spacing: 0.2vw;
        -moz-letter-spacing: 0.2vw;
        -ms-letter-spacing: 0.2vw;
        -webkit-letter-spacing: 0.2vw;
        -moz-letter-spacing: 0.2vw;
        -ms-letter-spacing: 0.2vw;
        letter-spacing: 0.2vw;
      }

      li {
        list-style: none;
        font-family: "Avenir";
        font-size: 3.5vw;
        line-height: 3.3vh;
        -webkit-letter-spacing: 0.1vw;
        -moz-letter-spacing: 0.1vw;
        -ms-letter-spacing: 0.1vw;
        letter-spacing: 0.1vw;
      }
    }
  }

  @media only screen and (min-width: 415px) and (max-width: 768px) {
    display: flex;
    justify-content: center;
    .main-member {
      width: 90%;
      display: flex;
      margin: 2.5% 0;
      flex-direction: row;
      justify-content: space-between;

      img {
        object-fit: cover;
        width: 45%;
        height: 30vh;
      }

      .main-member-description {
        width: 45%;

        text-align: left;
        p {
          font-family: "Avenir";
          font-size: 3.5vw;
          line-height: 2vh;
          -webkit-letter-spacing: 0.2vw;
          -moz-letter-spacing: 0.2vw;
          -ms-letter-spacing: 0.2vw;
          -webkit-letter-spacing: 0.2vw;
          -moz-letter-spacing: 0.2vw;
          -ms-letter-spacing: 0.2vw;
          letter-spacing: 0.2vw;
        }

        li {
          list-style: none;
          font-family: "Avenir";
          font-size: 2vw;
          line-height: 3vh;
          -webkit-letter-spacing: 0.1vw;
          -moz-letter-spacing: 0.1vw;
          -ms-letter-spacing: 0.1vw;
          letter-spacing: 0.1vw;
        }
      }
    }
    .workersContainer {
      display: flex;
      flex-wrap: wrap;
      width: 90%;
      margin: 0 auto;
      justify-content: space-between;
      flex-direction: row;
    }
  }

  @media screen and (orientation: landscape) and (max-height: 414px) {
    display: flex;
    justify-content: center;
    .main-member {
      width: 90%;
      display: flex;
      margin: 2.5% 0;
      flex-direction: row;
      justify-content: space-between;

      img {
        object-fit: cover;
        width: 45%;
        height: 50vh;
      }

      .main-member-description {
        width: 45%;

        text-align: left;
        p {
          font-family: "Avenir";
          font-size: 3.5vw;
          line-height: 2vh;
          -webkit-letter-spacing: 0.2vw;
          -moz-letter-spacing: 0.2vw;
          -ms-letter-spacing: 0.2vw;
          -webkit-letter-spacing: 0.2vw;
          -moz-letter-spacing: 0.2vw;
          -ms-letter-spacing: 0.2vw;
          letter-spacing: 0.2vw;
        }

        li {
          list-style: none;
          font-family: "Avenir";
          font-size: 2vw;
          line-height: 5vh;
          -webkit-letter-spacing: 0.1vw;
          -moz-letter-spacing: 0.1vw;
          -ms-letter-spacing: 0.1vw;
          letter-spacing: 0.1vw;
        }
      }
    }
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
    display: flex;
    justify-content: center;
    .main-member {
      width: 90%;
      display: flex;
      margin: 2.5% 0;
      flex-direction: row;
      justify-content: space-between;

      img {
        object-fit: cover;
        width: 45%;
        height: 30vh;
      }

      .main-member-description {
        width: 45%;

        text-align: left;
        p {
          font-family: "Avenir";
          font-size: 3.5vw;
          line-height: 5vh;
          -webkit-letter-spacing: 0.2vw;
          -moz-letter-spacing: 0.2vw;
          -ms-letter-spacing: 0.2vw;
          -webkit-letter-spacing: 0.2vw;
          -moz-letter-spacing: 0.2vw;
          -ms-letter-spacing: 0.2vw;
          letter-spacing: 0.2vw;
        }

        li {
          list-style: none;
          font-family: "Avenir";
          font-size: 2.5vw;
          line-height: 3vh;
          -webkit-letter-spacing: 0.1vw;
          -moz-letter-spacing: 0.1vw;
          -ms-letter-spacing: 0.1vw;
          letter-spacing: 0.1vw;
        }
      }
    }
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
    display: flex;
    justify-content: center;
    .main-member {
      width: 90%;
      display: flex;
      margin: 2.5% 0;
      flex-direction: row;
      justify-content: space-between;

      img {
        object-fit: cover;
        width: 45%;
        height: 45vh;
      }

      .main-member-description {
        width: 50%;

        text-align: left;
        p {
          font-family: "Avenir";
          font-size: 3vw;
          line-height: 5vh;
          -webkit-letter-spacing: 0.2vw;
          -moz-letter-spacing: 0.2vw;
          -ms-letter-spacing: 0.2vw;
          -webkit-letter-spacing: 0.2vw;
          -moz-letter-spacing: 0.2vw;
          -ms-letter-spacing: 0.2vw;
          letter-spacing: 0.2vw;
        }

        li {
          list-style: none;
          font-family: "Avenir";
          font-size: 1.5vw;
          line-height: 3vh;
          -webkit-letter-spacing: 0.15vw;
          -moz-letter-spacing: 0.15vw;
          -ms-letter-spacing: 0.15vw;
          letter-spacing: 0.15vw;
        }
      }
    }
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
    display: flex;
    justify-content: center;
    .main-member {
      width: 90%;
      display: flex;
      margin: 2.5% 0;
      flex-direction: row;
      justify-content: space-between;

      img {
        object-fit: cover;
        width: 40%;
        height: 45vh;
      }

      .main-member-description {
        width: 50%;

        text-align: left;
        p {
          font-family: "Avenir";
          font-size: 3vw;
          line-height: 5vh;
          -webkit-letter-spacing: 0.2vw;
          -moz-letter-spacing: 0.2vw;
          -ms-letter-spacing: 0.2vw;
          -webkit-letter-spacing: 0.2vw;
          -moz-letter-spacing: 0.2vw;
          -ms-letter-spacing: 0.2vw;
          letter-spacing: 0.2vw;
        }

        li {
          list-style: none;
          font-family: "Avenir";
          font-size: 1.5vw;
          line-height: 3vh;
          -webkit-letter-spacing: 0.2vw;
          -moz-letter-spacing: 0.2vw;
          -ms-letter-spacing: 0.2vw;
          letter-spacing: 0.2vw;
        }
      }
    }
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
