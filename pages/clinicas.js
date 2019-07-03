import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import NavBar from '../components/NavBar';
import Head from "next/head";
import Main from '../components/Main'
import img from '../static/imgs/clinicas/imgClinicas1.jpg'
// import img2 from '../static/imgs/clinicas/imgClinica2.jpg'
import img3 from '../static/imgs/clinicas/galeria/imgclinicagaleria6.jpg'
import img4 from '../static/imgs/clinicas/mapa.jpg'
import img5 from '../static/imgs/clinicas/marker.png'
import img6 from '../static/imgs/clinicas/galeria/imgclinicagaleria9.jpg'

// import image1 from "../static/imgs/clinicas/galeria/imgclinicagaleria1.jpg";
import image3 from "../static/imgs/clinicas/galeria/imgclinicagaleria7.jpg";
import image4 from "../static/imgs/clinicas/galeria/imgclinicagaleria5.jpg";
// import image2 from "../static/imgs/clinicas/galeria/imgclinicagaleria2.jpg";
// import image5 from "../static/imgs/clinicas/galeria/imgClinica2.jpg";
import image6 from "../static/imgs/clinicas/galeria/imgclinicagaleria8.jpg";
import Avenir from "../static/fonts/avenir.ttf";
import AvenirL from "../static/fonts/Avenir-Light-07.ttf";
import AvenirB from "../static/fonts/Avenir-bold.ttf";
import { ImgWithText } from '../components/pageSections/ImgWithText';
import { TextSection } from '../components/pageSections/TextSection';
import { ListItems } from '../components/pageSections/ListItems';
import Footer from '../components/Footer';
import { ClinicasMainPageStyle } from '../PagesStyles/ClinicasMainPageStyle'
import ImageGallery from 'react-image-gallery';
import FloatingMenu from '../components/FloatingMenu';

const images = [
    {original: image1},
    {original: image3},
    {original: image4},
    {original: image2},
]

const texto = {
    p1: "Clínica Cidad inició su actividad al cuidado de la salud y de la estética hace más de 30 años con un solo objetivo: ofrecer un servicio de excelencia sumado a una atención personalizada.",
    p2: "Con este propósito y decididos a renovarnos queremos presentarles la nueva clínica Cidad, situada en el barrio de Hortaleza. Ubicada en un espacio singular cuyo diseño orientado al bienestar de nuestros pacientes, se caracteriza por la luz, que invade todas las estancias. Cada rincón de la clínica está minuciosamente diseñado para transportarnos a un paisaje natural.",
    p3: "Una de las principales novedades en el diseño de la clínica es el espacio dedicado a la sala de espera que se divide en dos zonas, una en forma de terraza chillout donde disfrutar del buen tiempo y otra interior planteada para un uso polivalente, conferencias, exposiciones, cursos…",
}

const texto2 = {
    p1: "Contamos con una totalidad de 7 gabinetes entre ambas clínicas dotados con las últimas tecnologías y radiodiagnóstico que garantiza el éxito de nuestros procedimientos, además todos los gabinetes y ambas clínicas están conectadas informáticamente facilitando la comunicación interpersonal y el trabajo colaborativo entre el equipo multidisciplinar; la suma de los conocimiento de cada especialista son la clave del éxito de nuestros tratamientos."
}

const listTratamientos = ["odontología preventiva", "Odontopediatría", "Eestética dental"]


const Clinicas = props => {
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
            <ClinicasMainPageStyle>
                <NavBar position={true}></NavBar>
                <FloatingMenu />
                <Main img={img} imgPosition={-201} title={"Clínica Cidad"} subtitle={"nuestras clínicas"} footer={false}></Main>
                <div className="firstSectionClinicas">
                    <ImgWithText img={img2} width={50} text={"Machupichu 25 |  Alcalá 590 1A"} colorText={"black"} imgPosition={-60} order={3}></ImgWithText>
                    <TextSection text={texto}></TextSection>
                </div>
                <ImageGallery items={images} showThumbnails={false} showPlayButton={false} showNav={false} autoPlay={true} slideDuration={600} lazyLoad={true} />
                
                <div className="secondSectionClinicas">
                    <TextSection text={texto2}></TextSection>
                    <div className="mapContainer">
                        <img src={img5} className="marker"></img>
                        <img src={img4} className="imagenMapa"></img>
                    </div>
                </div>
                <ListItems list={listTratamientos}></ListItems>
                <React.Fragment>
                    <img src={img6} className="imagenSilla"></img>
                </React.Fragment>
                <Footer></Footer>
            </ClinicasMainPageStyle>

        </React.Fragment>
    )
}

export default Clinicas