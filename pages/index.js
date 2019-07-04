import React from "react";
import NavBar from "../components/NavBar";
import Main from "../components/Main";
import Tratamientos from "../components/Tratamientos";
import Equipo from "../components/Equipo";
import Footer from "../components/Footer";
import Cookies from "../components/Cookies/Cookies";
import FloatingMenu from "../components/FloatingMenu";
import Meta from "../components/Meta";

export default () => (
  <React.Fragment>
    <Meta />
    <React.Fragment>
    <FloatingMenu />
      <NavBar />
      <Main home
        img={"/static/imgs/home/imgHome1.jpg"}
        imgPosition={-251}
        title={"Clínica Cidad"}
        subtitle={"odontología, ortodoncia y medicina estética."}
        footer={true}
      />
      <Tratamientos />
      <Equipo />
      <div className="center">
        <Cookies backgroundColor="white" />
      </div>
      <Footer />
    </React.Fragment>
  </React.Fragment>
);
