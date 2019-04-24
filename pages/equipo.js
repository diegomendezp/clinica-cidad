import React from 'react'
import NavBar from '../components/NavBar';
import Head from "next/head";
import Main from '../components/Main'
import img from '../static/imgs/equipo/imgpersonal1.jpg'
import Avenir from "../static/fonts/avenir.ttf";
import AvenirL from "../static/fonts/Avenir-Light-07.ttf";
import fotopadierna from "../static/imgs/equipo/imgdrAna.jpg";
import fotorabal from "../static/imgs/equipo/imgdrAna2.jpg";
import fotoangel from "../static/imgs/equipo/imgdrAngel.jpg";
import WorkerCard from '../components/pageSections/WorkerCard';
import { EquipoMainPageStyle } from '../PagesStyles/EquipoMainPageStyle'
import { H3Style } from '../PagesStyles/TextStyles/H3Style'
import Footer from '../components/Footer';

const trabajadores = [
    {
        nombre: "Dra. Ana Padierna",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget faucibus est, aliquam condimentum tortor. Nunc a sagittis nunc. Maecenas tincidunt congue lacus. Etiam interdum id dolor quis fringilla. Maecenas vitae eros a metus efficitur molestie nec vitae arcu. Maecenas et iaculis diam, vel ornare erat. Suspendisse rhoncus urna eget nibh rhoncus accumsan.",
        imagen: fotopadierna,
    },
    {
        nombre: "Dr. Ángel",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget faucibus est, aliquam condimentum tortor. Nunc a sagittis nunc. Maecenas tincidunt congue lacus. Etiam interdum id dolor quis fringilla. Maecenas vitae eros a metus efficitur molestie nec vitae arcu. Maecenas et iaculis diam, vel ornare erat. Suspendisse rhoncus urna eget nibh rhoncus accumsan.",
        imagen: fotoangel,
    },
    {
        nombre: "Dra. Ana Rabal",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget faucibus est, aliquam condimentum tortor. Nunc a sagittis nunc. Maecenas tincidunt congue lacus. Etiam interdum id dolor quis fringilla. Maecenas vitae eros a metus efficitur molestie nec vitae arcu. Maecenas et iaculis diam, vel ornare erat. Suspendisse rhoncus urna eget nibh rhoncus accumsan.",
        imagen: fotorabal,
    }
]

const Equipo = props => {
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
            <NavBar></NavBar>
            <EquipoMainPageStyle>
                <Main img={img} imgPosition={-421} title={"Clínica Cidad –"} subtitle={"nuestro equipo"} footer={false}></Main>
                <div>
                    <H3Style equipo={true}>
                        Nuestros doctores
                    </H3Style>
                    <div className="workersContainer">
                        {
                            trabajadores.map(trabajador => <WorkerCard trabajador={trabajador}></WorkerCard>)
                        }
                    </div>
                </div>
                <Footer></Footer>
            </EquipoMainPageStyle>

        </React.Fragment>
    )
}

export default Equipo