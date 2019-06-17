import React from 'react'
import NavBar from '../components/NavBar';
import Head from "next/head";
import Main from '../components/Main'
import img from '../static/imgs/tratamientos/imgTratamientos.jpg'
import img2 from '../static/imgs/tratamientos/imgTratamientos2.jpg'
import Avenir from "../static/fonts/avenir.ttf";
import AvenirL from "../static/fonts/Avenir-Light-07.ttf";
import AvenirB from "../static/fonts/Avenir-bold.ttf";
import { ImgWithText } from '../components/pageSections/ImgWithText';
import { ListItems } from '../components/pageSections/ListItems';
import Footer from '../components/Footer'
import FloatingMenu from '../components/FloatingMenu';


const listTratamientosODO = ["ODONTOLOGÍA PREVENTIVA", "– de caries", "– de enfermedad periodontal e Higiene", "ODONTOPEDIATRÍA", "ENDODONCIA", "PERIODONCIA", "ORTODONCIA", "– Aparatología removible", "– Apartología fija", "– Brackets Damon System ®", "–– Metálicos", "–– Estéticos", "– Ortodoncia invisible. Ivisaling®", "– Prótesis", "––Fija", "–– Removible", "IMPLANTOLOGÍA", "MAXILIFACIAL", "RADIODIAGNÓSTICO 3D", "NOVEDADES", "– Limpieza con aeropulidor" ]




const Tratamientos = props => {
    return (
        <React.Fragment>
            <Head>
                <img></img>
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
            
            @font-face {
                font-family: "AvenirB";
                src: url(${AvenirB}) format("truetype");
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
    
        
        `}</style>
            <React.Fragment>
                <NavBar></NavBar>
                <FloatingMenu />
                <Main img={img} imgPosition={-551} title={"Clínica Cidad"} subtitle={"nuestros tratamientos"} footer={false}></Main>
                <ImgWithText img={img2} text={"ODONTOLOGÍA Y ORTODONCIA"} colorText={"white"}></ImgWithText>
                <ListItems list={listTratamientosODO}></ListItems>
                <Footer></Footer>
            </React.Fragment>

        </React.Fragment>
    )
}

export default Tratamientos