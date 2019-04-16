import React from 'react'
import NavBar from '../components/NavBar';
import Head from "next/head";
import Main from '../components/Main'
import img from '../static/imgs/tratamientos/imgTratamientos.jpg'
import img2 from '../static/imgs/tratamientos/imgTratamientos2.jpg'
import img3 from '../static/imgs/tratamientos/ingTratamientos.jpg'
import Avenir from "../static/fonts/avenir.ttf";
import AvenirL from "../static/fonts/Avenir-Light-07.ttf";
import { ImgWithText } from '../components/pageSections/ImgWithText';
import { ListItems } from '../components/pageSections/ListItems';
import svg1 from '../static/imgs/tratamientos/Icon/iconResultado.svg'
import svg2 from '../static/imgs/tratamientos/Icon/iconAplicacion.svg'
import svg3 from '../static/imgs/tratamientos/Icon/iconDuracion.svg'
import svg4 from '../static/imgs/tratamientos/Icon/iconAnestesia.svg'
import { IconContainer } from '../components/pageSections/IconsContainer';
import Footer from '../components/Footer'


const listTratamientos = ["Odeontología preventiva", "Odontopediatría", "Eestética dental"]

const icons = [
    {svg: svg1, title: "RESULTADO", subtitle: "Inmediato"},
    {svg: svg2, title: "APLICACIÓN", subtitle: "Dependiendo"},
    {svg: svg3, title: "DURACIÓN", subtitle: "Dependiendo"},
    {svg: svg4, title: "ANESTESIA", subtitle: "No necesaria"},
]

const Tratamientos = props => {
    return (
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
    
        
        `}</style>
            <React.Fragment>
                <NavBar></NavBar>
                <Main img={img} imgPosition={-551} title={"Clínica Cidad –"} subtitle={"nuestros tratamientos"} footer={false}></Main>
                <ImgWithText img={img2} text={"ORTODONCIA Y ODEONTOLOGÍA"}></ImgWithText>
                <ListItems list={listTratamientos}></ListItems>
                <ImgWithText img={img3} imgPosition={-270} text={"MEDICINA ESTÉTICA"}></ImgWithText>
                <IconContainer icons={icons}></IconContainer>
                <ListItems list={listTratamientos}></ListItems>
                <Footer></Footer>
            </React.Fragment>

        </React.Fragment>
    )
}

export default Tratamientos