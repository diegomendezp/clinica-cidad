import React from "react";
import NavBar from "../components/NavBar";
import Main from "../components/Main";
import img from "../static/imgs/equipo/imgpersonal1.jpg";
import WorkerCard from "../components/pageSections/WorkerCard";
import { EquipoMainPageStyle } from "../PagesStyles/EquipoMainPageStyle";
import { H3Style } from "../PagesStyles/TextStyles/H3Style";
import Footer from "../components/Footer";
import trabajadores from "../content/team.json";
import FloatingMenu from "../components/FloatingMenu";
import Meta from "../components/Meta";

const displayMainMember = member => {
  const { name, photo, curriculum } = member;
  return (
    <div className="main-member">
      <img src={photo} alt="main-member-photo" />
      <div className="main-member-description">
        <p className="main-member-name">{name}</p>
        {curriculum.map((e, i) => (
          <li key={i}>– {e.name}</li>
        ))}
      </div>
    </div>
  );
};

const Equipo = props => {
  const { doctors, other, boss } = trabajadores;
  return (
    <React.Fragment>
      <Meta />
      <NavBar />
      <FloatingMenu />
      <EquipoMainPageStyle>
        <Main
          img={img}
          imgPosition={-421}
          title={"Clínica Cidad"}
          subtitle={"nuestro equipo"}
          footer={false}
        />
        <H3Style equipo={true}>Nuestros doctores</H3Style>
        {displayMainMember(boss)}
        <div>
          <div className="workersContainer">
            {doctors.map(trabajador => (
              <WorkerCard trabajador={trabajador} />
            ))}
          </div>
        </div>
        <div>
          <H3Style equipo={true}>Equipo</H3Style>
          <div className="workersContainer">
            {other.map(trabajador => (
              <WorkerCard trabajador={trabajador} />
            ))}
          </div>
        </div>
        <Footer />
      </EquipoMainPageStyle>
    </React.Fragment>
  );
};

export default Equipo;
