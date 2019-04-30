import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import NavBar from '../components/NavBar';
import Head from "next/head";
import Main from '../components/Main'
import img from '../static/imgs/clinicas/imgClinicas1.jpg'
import img2 from '../static/imgs/clinicas/imgClinica2.jpg'
import img3 from '../static/imgs/clinicas/galeria/imgclinicagaleria6.jpg'
import img4 from '../static/imgs/clinicas/mapa.jpg'
import img5 from '../static/imgs/clinicas/marker.png'
import img6 from '../static/imgs/clinicas/galeria/imgclinicagaleria9.jpg'
import Avenir from "../static/fonts/avenir.ttf";
import AvenirL from "../static/fonts/Avenir-Light-07.ttf";
import { ImgWithText } from '../components/pageSections/ImgWithText';
import { TextSection } from '../components/pageSections/TextSection';
import { ListItems } from '../components/pageSections/ListItems';
import Footer from '../components/Footer';
import { ClinicasMainPageStyle } from '../PagesStyles/ClinicasMainPageStyle'
import ImageGallery from 'react-image-gallery';

const images = [
    {original: img3},
    {original: img2}
]

const texto = {
    p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ullamcorper massa, nec tincidunt diam egestas vitae. Ut a elit lorem. Nulla ultricies erat vitae varius mattis. Etiam blandit lacus purus, eu rhoncus dolor sollicitudin vitae. Ut vel vestibulum nulla. Cras dui nibh, mattis et sollicitudin quis, pharetra faucibus urna. ",
    p2: "Aenean condimentum interdum tortor a porta. Nulla eu diam sodales, facilisis est a, laoreet risus. Fusce iaculis quam commodo felis ornare, in tincidunt turpis fermentum. Vivamus sed augue aliquet, mattis neque eu, tincidunt massa. Proin iaculis sapien vel maximus interdum. In hac habitasse platea dictumst. Morbi pretium lorem vitae pretium cursus. Morbi mattis, quam id porta maximus, arcu dui vestibulum ipsum, quis molestie ligula lectus eu metus. Integer sit amet nisl sed magna venenatis vehicula. Cras sed dolor eget orci fringilla rutrum at faucibus nulla. ",
    p3: "Duis tempor nulla erat, nec vulputate turpis placerat vitae. Etiam vel pretium augue. Ut vel aliquet purus. Etiam ut fringilla ante. Suspendisse rhoncus ultrices lacus nec tempor.",
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
                <Main img={img} imgPosition={-201} title={"Clínica Cidad –"} subtitle={"nuestras clínicas"} footer={false}></Main>
                <div className="firstSectionClinicas">
                    <ImgWithText img={img2} width={50} text={"Machupichu 25 |  Alcalá 590 1A"} colorText={"black"} imgPosition={-60} order={3}></ImgWithText>
                    <TextSection text={texto}></TextSection>
                </div>
                <ImageGallery items={images} showThumbnails={false} showPlayButton={false}/>
                
                <div className="secondSectionClinicas">
                    <TextSection text={texto}></TextSection>
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