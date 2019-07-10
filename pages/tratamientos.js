import React from "react";
import NavBar from "../components/NavBar";
import Main from "../components/Main";
import img from "../static/imgs/tratamientos/imgTratamientos.jpg";
import img2 from "../static/imgs/tratamientos/imgTratamientos2.jpg";
import { ImgWithText } from "../components/pageSections/ImgWithText";
import { ListItems } from "../components/pageSections/ListItems";
import Footer from "../components/Footer";
import FloatingMenu from "../components/FloatingMenu";
import Meta from "../components/Meta";


const listTratamientosODO = [
  "ODONTOLOGÍA PREVENTIVA",
  "– de caries",
  "– de enfermedad periodontal e Higiene",
  "ODONTOPEDIATRÍA",
  "ENDODONCIA",
  "PERIODONCIA",
  "ORTODONCIA",
  "– Aparatología removible",
  "– Apartología fija",
  "– Brackets Damon System ®",
  "–– Metálicos",
  "–– Estéticos",
  "– Ortodoncia invisible. Ivisaling®",
  "– Prótesis",
  "––Fija",
  "–– Removible",
  "IMPLANTOLOGÍA",
  "MAXILIFACIAL",
  "RADIODIAGNÓSTICO 3D",
  "NOVEDADES",
  "– Limpieza con aeropulidor"
];

const Tratamientos = props => {
  return (
    <React.Fragment>
      <Meta />
      <React.Fragment>
        <NavBar />
        <FloatingMenu />
        <Main
          img={img}
          imgPosition={-551}
          title={"Clínica Cidad"}
          subtitle={"nuestros tratamientos"}
          footer={false}
        />
        <ImgWithText
          img={img2}
          text={"ODONTOLOGÍA Y ORTODONCIA"}
          colorText={"white"}
        />
        <ListItems list={listTratamientosODO} />
        <ImgWithText img={"/static/imgs/img7.jpg"} imgPosition={-270} text={"MEDICINA ESTÉTICA"} colorText={"white"} tratamiento={true}>
                </ImgWithText>
                {/* <IconContainer icons={icons}></IconContainer> */}
        
        <Footer />
      </React.Fragment>
    </React.Fragment>
  );
};

export default Tratamientos;
