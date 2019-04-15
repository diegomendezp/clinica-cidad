import React from 'react'
import posed from 'react-pose';
import { NavWrapperStyle } from '../PagesStyles/NavBarStyle'
import { FooterStyle } from '../PagesStyles/FooterStyle'
import { NavTextStyle } from '../PagesStyles/TextStyles/NavTextStyle'
import logo from '../static/imgs/home/logoMenu.jpg'

const Box = posed.div({
    up: {
        y: ({ y }) => (y),
        transition: {
            duration: 400,
            ease: 'linear'
        }
    },
    down: {
        y: ({ y2 }) => (y2),
        transition: {
            duration: 400,
            ease: 'linear'
        }
    }
})


class NavBar extends React.Component {

    constructor() {
        super()
        this.state = {
            hamburger: undefined,
            position: true,
        }
    }

    _manageResize = () => {
        return {y: -window.innerHeight, y2: 0}
        // switch (true) {
        // case window.innerWidth < 376:
        //     return { y: -500, y2: 310 }
        // case window.innerWidth < 415:
        //     return { y: -500, y2: 370 }
        // case window.innerWidth < 769:
        //     return { y: -500, y2: 370 }
        // default:
        //     return { y: -500, y2: 365 }
        // }
    };

    componentDidMount() {
        this.setState({ hamburger: document.getElementsByClassName("hamburger")[0], menuSizes: this._manageResize() })
    }

    hamburgerEffect = () => {

        let el = this.state.hamburger
        if (el.classList) {
            el.classList.toggle('is-active');
        } else {
            var classes = el.className.split(' ');
            var existingIndex = classes.indexOf('is-active');

            if (existingIndex >= 0)
                classes.splice(existingIndex, 1);
            else
                classes.push('is-active');

            el.className = classes.join(' ');
        }
    }


    render() {

        return (
            <NavWrapperStyle>
                <div className="menuIcon">
                    <link href="/static/css/hamburger.css" rel="stylesheet" />
                    <button className="hamburger hamburger--spin" type="button" onClick={() => this.setState({ position: !this.state.position }, () => this.hamburgerEffect())}>
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
                <Box pose={this.state.position ? "up" : "down"} className="menu" y={this.state.menuSizes !== undefined && this.state.menuSizes.y} y2={this.state.menuSizes !== undefined && this.state.menuSizes.y2}>
                    <div className="menuSection">
                    <div className="subMenuSection">
                        <img className="logo" src={logo} />
                        <NavTextStyle margin={true}>Citas: 600 000 000 – 91 000 000 Calle Alcalá 590 1A </NavTextStyle>
                        <NavTextStyle margin={true}>Citas: 600 000 000 – 91 000 000 Calle Machupichu 25</NavTextStyle>
                        <NavTextStyle>info@clinicacidad.es</NavTextStyle>
                    </div>
                    <div className="subMenuSection">
                        <NavTextStyle>Clínicas</NavTextStyle>
                        <NavTextStyle>Tratamientos</NavTextStyle>
                        <NavTextStyle>- Medicina estética</NavTextStyle>
                        <NavTextStyle>- Ortodoncia</NavTextStyle>
                        <NavTextStyle>- Odeontología</NavTextStyle>
                        <NavTextStyle>Equipo</NavTextStyle>
                        <NavTextStyle>Blog</NavTextStyle>
                    </div>
                    </div>
                    <div className="menuFooter">
                        <NavTextStyle>© 2019 by Tailor</NavTextStyle>
                    </div>
                </Box>
            </NavWrapperStyle>
        )
    }
}

export default NavBar