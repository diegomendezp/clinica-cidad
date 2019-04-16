import React from 'react'
import Head from "next/head";
import NavBar from '../components/NavBar';
import Main from '../components/Main';
import Tratamientos from '../components/Tratamientos'
import Equipo from '../components/Equipo'
import Footer from '../components/Footer'
import Avenir from "../static/fonts/avenir.ttf";
import AvenirL from "../static/fonts/Avenir-Light-07.ttf";
import imageOffice from '../static/imgs/home/imgHome1.jpg'


export default () => (
  <React.Fragment>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Clínica Cidad</title>
    </Head>
    <style jsx global>{`
      @font-face {
        font-family: "Avenir";
        src: url(${Avenir}) format("truetype");
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: "AvenirL";
        src: url(${AvenirL}) format("truetype");
        font-weight: normal;
        font-style: normal;
      }


      body {
        margin: 0;
        padding: 0;
        max-width: 100%;
        position: relative;
        overflow-x: hidden;
      
      }

      .center {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
      }
    `}</style>
    <React.Fragment>
      <NavBar></NavBar>
      <Main img={imageOffice} imgPosition={-551} title={"Clínica Cidad –"} subtitle={"medicina estética, ortodoncia, odeontología…"} footer={true}></Main>
      <Tratamientos></Tratamientos>
      <Equipo></Equipo>
      <Footer></Footer>
    </React.Fragment>
  </React.Fragment>
);
