import React from "react";
import posed from "react-pose";
import { NavWrapperStyle } from "../PagesStyles/NavBarStyle";
import { NavTextStyle } from "../PagesStyles/TextStyles/NavTextStyle";
import { NavLinkStyle } from "../PagesStyles/TextStyles/NavLinkStyle";
import Link from "next/link";
import { PStyle } from "../PagesStyles/TextStyles/PStyle";

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      hamburger: undefined,
      position: true,
      pos: true,
      menuSizes: { y: -1000, y2: 0 },
      visible: false
    };
  }

  _manageResize = () => {
    switch (true) {
      case window.innerWidth < 376:
        return { y: -window.innerHeight * 1.2, y2: 95 };
      case window.innerWidth < 415:
        return { y: -window.innerHeight * 1.2, y2: 140 };
      case window.innerWidth < 769:
        return { y: -window.innerHeight * 1.2, y2: 0 };
      case window.innerWidth < 1024:
        return { y: -window.innerHeight * 1.2, y2: -60 };
      case window.innerWidth < 1280:
        return { y: -window.innerHeight * 1.2, y2: -60 };
      case window.innerWidth > 1280 && window.innerWidth < 1400:
        return { y: -window.innerHeight * 1.2, y2: 0 };
      case window.innerWidth >= 1400:
        return { y: -window.innerHeight * 1.2, y2: -165 };
    }
  };

  hamburgerEffect = () => {
    if (this.state.visible) {
      setTimeout(() => {
        this.setState({ visible: !this.state.visible });
      }, 400);
    } else {
      this.setState({ visible: !this.state.visible });
    }
  };

  _managePositionNav = () => {
    if (this.state.pos) {
      this.setState(
        { position: !this.state.position, pos: !this.state.pos },
        () => this.hamburgerEffect()
      );
    } else {
      this.setState({ position: !this.state.position }, () => {
        this.hamburgerEffect();
        setTimeout(() => {
          this.setState({ pos: !this.state.pos });
        }, 400);
      });
    }
  };

  render() {
    return (
      <NavWrapperStyle position={this.state.pos} visible={this.state.visible}> 
        <div className="menuIcon">
            <span className="hamburger-box">
              <PStyle menu onClick={() => this._managePositionNav()}>{this.state.visible ? "Cerrar" : "Menu"} </PStyle>
            </span>
        </div>

        <div
          className="dialog"
          style={{ display: this.state.visible ? "block" : "none", height:  this.state.visible ? "auto" : "0px" }}
        >
           <div className="close">
             <PStyle menu onClick={() => this._managePositionNav()} > Cerrar </PStyle>
           </div>
          <div className="menu"></div>
          <div
            className="menu-container"
            style={{ opacity: this.state.visible ? 1 : 0 }}
          >
            <div className="nav-container menu-open">
              
              <div className="menuSection">
                <div className="logoSection">
                  <Link href="/">
                    <img
                      onClick={() => this._managePositionNav()}
                      className="logo"
                      src={"/static/imgs/home/logoMenu.jpg"}
                      alt="logo-clinica"
                    />
                  </Link>
                </div>
                <div className="infoNavSection">
              <div className="leftSection">
                <div className="subMenuSection">
                  <NavTextStyle>
                    <a
                      href="https://goo.gl/maps/4n5D8sUit7jNDYbY8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Calle Alcalá 590 1A
                    </a>
                  </NavTextStyle>
                  <NavTextStyle margin={true}>
                    <a href={`tel:${"917423141"}`}>917 42 31 41</a>
                  </NavTextStyle>
                  <NavTextStyle>
                    <a
                      href="https://g.page/CIDAD?share"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Calle Machupichu 65
                    </a>
                  </NavTextStyle>
                  <NavTextStyle margin={true}>
                    <a href={`tel:${"910660526"}`}>910 66 05 26</a>
                  </NavTextStyle>
                  <NavTextStyle>
                    <a href={`mailto:info@clinicacidad.es`}>
                      info@clinicacidad.es
                    </a>
                  </NavTextStyle>
                </div>
              </div>
              <div className="rightSection">
                <div className="subMenuSection2">
                  <Link href="/clinicas">
                    <NavLinkStyle title={true} margin={true}>
                      Clínicas
                    </NavLinkStyle>
                  </Link>
                  <Link href="/tratamientos">
                    <a>
                      <NavLinkStyle title={true} margin={true}>
                        Tratamientos
                      </NavLinkStyle>
                    </a>
                  </Link>
                  <Link href="/equipo">
                    <a>
                      <NavLinkStyle title={true} margin={true}>
                        Equipo
                      </NavLinkStyle>
                    </a>
                  </Link>
                  <Link href="/blog">
                    <a>
                      <NavLinkStyle title={true} margin={true}>
                        Blog
                      </NavLinkStyle>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
              </div>
                        
              <div className="menuFooter">
                {" "}
                            
                <NavTextStyle>
                                
                  <a href="http://tailor-hub.com" target="_blank">
                                    ©2019 by Tailor               
                  </a>
                             
                </NavTextStyle>
                     
                <img src={"/static/imgs/tailorBlackLogo.svg"} />           
              </div>
            </div>
          </div>
        </div>
      </NavWrapperStyle>
    );
  }
}

export default NavBar;
