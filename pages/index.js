import React from 'react'
import Head from "next/head";
import NavBar from '../components/NavBar';
import Main from '../components/Main';
import Tratamientos from '../components/Tratamientos'
import Equipo from '../components/Equipo'
import Avenir from "../static/fonts/avenir.ttf";


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


      body {
        margin: 0;
        padding: 0;
        max-width: 100%;
        position: relative;
      
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
      <Main></Main>
      <Tratamientos></Tratamientos>
      <Equipo></Equipo>
    </React.Fragment>
  </React.Fragment>
);
